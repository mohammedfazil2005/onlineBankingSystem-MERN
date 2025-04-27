
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { staffData } from '../../../randomdata/data'
import { Button, FloatingLabel, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { onFetchAllStaffs } from '../../../../services/allAPI'




const HomeAdminStaffManagement = ({setCategoryName}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [staffs,setStaffs]=useState([])

  const fetchStaffs=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){

        const header={
            'Authorization':`Bearer ${token}`
        }

        try {
            const serverResponce=await onFetchAllStaffs(header)
            if(serverResponce.status==200){
                setStaffs(serverResponce.data)
            }
        } catch (error) {
            console.log(error)
        }

    }else{
        toast.error("please login again!")
    }
  }

  useEffect(()=>{
    fetchStaffs()
  },[])

  console.log(staffs)

   
  return (
    <div className='home-admin-userdetails-parent'>

            <div className="home-admin-user-details-heading">
                <h1>Staff Management</h1>
                <p>Manage staff details</p>
            </div>
            <div className="home-admin-user-details-search home-admin-search-staff" style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                <input type="text" placeholder='Search user' />
                <button className='ms-2'>Search</button>
                </div>
            
                <Form.Select aria-label="Default select example" value={''} style={{width:'180px'}} className='float-end'>
                            <option value="" disabled>Select staff by role</option>
                           {staffData.map((a)=>(
                             <option value={a.value} key={a.label}>{a.label}</option>
                           ))}
                        </Form.Select>

            </div>
            <div className="home-admin-user-details-table-parent">
              {staffs?.length>0?staffs?.map((a,key)=>(
                <>
                 <div className="user-details-table-card-main">
                 <div>
                     <img src={`http://localhost:3000/uploads/${a.imageurl}`} alt="" />
                     <h2>{a?.firstname} {a?.lastname}</h2>
                     <h6>{a?.role}</h6>
                 </div>
                 <main>
                 <p>Active</p>
                 <button className='w-100' onClick={handleShow}>Send a notification</button>
                 </main>
                </div>
                <hr />
                </>
              )):""}
               
               
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Send Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='notification-modal-parent'>
                        <div>
                            
                            <p>Enter the title for the notification you want to send.</p>
                            <FloatingLabel controlId="title" label="Title" className="mb-3">
                                <Form.Control type="text" placeholder="Enter title" className="cursor-pointer" required style={{ width: '100%' }} />
                            </FloatingLabel>
                        </div>
                        <div>
                            <div>
                            
                                <p>Provide a brief message that will be sent as a notification.</p>
                                <FloatingLabel controlId="message" label="Message" className="mb-3">
                                    <Form.Control as="textarea" placeholder="Enter message" className="cursor-pointer" required style={{ width: '100%',height:'200px' }} />
                                </FloatingLabel>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
  )
}

export default HomeAdminStaffManagement
