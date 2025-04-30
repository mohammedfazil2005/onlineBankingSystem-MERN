import React, { useEffect, useState } from 'react'
import './HomeAdminNotifications.css'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { onFetchAllBankNotifications, onFetchAllNotifications, onSendNotificationToAllUsers } from '../../../../services/allAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const HomeAdminNotifications = () => {
   

    

    const navigate=useNavigate()

    const [notifications,setNotification]=useState([])
    const [not,setNot]=useState('')
    const [notficationDetails,setNotificationDetails]=useState({
        title:"",
        message:""
    })
    const [show, setShow] = useState(false);
    const [notShow, setNotShow] = useState(false);
    const [viewNot,setViewNot]=useState({})

    const [currentPage,setCurrentPage]=useState(1)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseNot = () => setNotShow(false);
    const handleShowNot = (a) => {
        setViewNot(a)
        setNotShow(true)
    };

    const fetchNotifications=async()=>{
          const token=sessionStorage.getItem("token")
                if(token){
                    try {
                        const header={
                            'Authorization': `Bearer ${token}`
                        }
                        const serverResponce=await onFetchAllBankNotifications(header)
                        console.log(serverResponce)
                        if(serverResponce.status==200){
                            setNotification(serverResponce.data)
                        }
        
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    navigate('/login')
                }
    }

    const sendNotifications=async()=>{
        const token=sessionStorage.getItem("token")
                if(token){
                    if(notficationDetails.title&&notficationDetails.message){
                        try {
                            const header={
                                'Authorization': `Bearer ${token}`
                            }
                            const serverResponce=await onSendNotificationToAllUsers(notficationDetails,header)
                            if(serverResponce.status==200){
                                toast.success(
                                    "Notification sent successfully! Stay updated with the latest alerts.",
                                    {
                                      style: {
                                        border: '2px solid blueviolet',
                                        padding: '16px',
                                        color: 'blueviolet',
                                      },
                                      iconTheme: {
                                        primary: 'blueviolet',
                                        secondary: 'white',
                                      },
                                      duration: 6000,
                                    }
                                  );
                                  
                                handleClose()
                                setNot("done")
                            }
            
                        } catch (error) {
                            console.log(error)
                        }
                    }else{
                        toast.error("Oops! Looks like you missed something. Kindly enter both a title and a message.")
                    }
                   
                }else{
                    toast.error("Please login again!")
                    navigate('/login')
                }
    }

    let notificationPerPage=7
    let totalPages=Math.ceil(notifications?.length/notificationPerPage)

   let lastIndex=currentPage*notificationPerPage
   let firstIndex=lastIndex-notificationPerPage

 

   let slicedArray=notifications?.slice(firstIndex,lastIndex)

 

   const onForward=()=>{
    if(currentPage<totalPages){
        setCurrentPage(currentPage+1)
    }
   }

   const onBackward=()=>{
    if(currentPage>1){
        setCurrentPage(currentPage-1)
    }
   }



    useEffect(()=>{
        fetchNotifications()
    },[not])





    return (
        <div className='home-admin-notifications-parent'>
            <div className="heading-dashboard-not">
                <div>
                    <h1>Send Notifications</h1>
                    <p>Notify users about important updates and transactions.</p>
                </div>
                <button onClick={handleShow}>Send Notifcation</button>
            </div>
            <div className='notfication-table-parent'>
                {slicedArray?.length>0?slicedArray?.map((a,key)=>(
                    <>
                      <div key={key} className='notification-table-main'>
                    <div>
                        <i className='fa-solid fa-bell'></i>
                        <p>{a?.message?.length>80?a?.message.slice(0,70):a?.message}...</p>
                      
                    </div>
                    <div>
                        <button onClick={()=>handleShowNot(a)}>View</button>
                    </div>
                </div>
                <hr style={{marginTop:'-2px'}}/>
                    </>
                )):""}
              
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <button className='btn' onClick={onBackward}><i class="fa-solid fa-arrow-left"></i></button>
                <p>{currentPage} of {totalPages}</p>
                <button className='btn' onClick={onForward}><i class="fa-solid fa-arrow-right"></i></button>
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
                                <Form.Control onChange={(e)=>setNotificationDetails({...notficationDetails,title:e.target.value})} type="text" placeholder="Enter title" className="cursor-pointer" required style={{ width: '100%' }} />
                            </FloatingLabel>
                        </div>
                        <div>
                            <div>
                            
                                <p>Provide a brief message that will be sent as a notification.</p>
                                <FloatingLabel controlId="message" label="Message" className="mb-3">
                                    <Form.Control onChange={(e)=>setNotificationDetails({...notficationDetails,message:e.target.value})} as="textarea" placeholder="Enter message" className="cursor-pointer" required style={{ width: '100%',height:'200px' }} />
                                </FloatingLabel>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendNotifications}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={notShow} onHide={handleCloseNot} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>View Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* <img style={{width:'50px',background:'black'}} src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2.png" alt="" /> */}
                        <h6>ID: <span style={{fontWeight:'400',fontSize:'15px'}}>{viewNot?.id}</span> </h6>
                        <h6 className='mt-3'>MESSAGE: <span style={{fontWeight:'400',fontSize:'15px'}}>{viewNot?.message}</span> </h6>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNot}>
                        Close
                    </Button>
                    {/* <Button variant="primary">
                        Send
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomeAdminNotifications
