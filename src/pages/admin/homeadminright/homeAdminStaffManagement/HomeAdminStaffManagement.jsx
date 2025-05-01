
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { staffData } from '../../../randomdata/data'
import { Button, FloatingLabel, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { onFetchAllStaffs, onRemoveStaffs, onSendNotificationToUser } from '../../../../services/allAPI'
import { useNavigate } from 'react-router-dom'




const HomeAdminStaffManagement = ({ setCategoryName }) => {
    const [show, setShow] = useState(false);
    const [showStaff, setShowStaff] = useState(false);
    const [staffID, setStaffID] = useState("")
    const [search, setSearch] = useState("")
    const [not,setNot]=useState("")
    const [data, setData] = useState("")

    const navigate = useNavigate()

    const [staffs, setStaffs] = useState([])
    const [notfication, setNotification] = useState({
        title: "",
        message: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setStaffID(id)
        setShow(true);
    }

    const handleCloseStaff = () => setShowStaff(false);
    const handleShowStaff = (id) => {
        setStaffID(id)
        setShowStaff(true);
    }

    const fetchStaffs = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {

            const header = {
                'Authorization': `Bearer ${token}`
            }

            try {
                const serverResponce = await onFetchAllStaffs(header)
                if (serverResponce.status == 200) {
                    setStaffs(serverResponce.data)
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            toast.error("please login again!")
        }
    }

    const sendNotifications = async () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            if (staffID) {
                if (notfication.title && notfication.message) {
                    try {
                        const serverResponce = await onSendNotificationToUser(staffID, notfication, header)
                        if (serverResponce.status == 200) {
                            toast.success(
                                "Notification sent successfully!",
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
                        } else {
                            toast.error("Please try again after some time!")
                        }
                    } catch (error) {
                        toast.error("Please try again after some time!")
                        console.log(error)
                    }
                } else {
                    toast.error("Oops! Looks like you missed something. Kindly enter both a title and a message.")
                }
            } else {
                toast.error("ID required!")
            }

        } else {
            toast.error("please login again")
            navigate('/login')
        }
    }

    const deleteStaffAccount = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            
                try {
                    const header = {
                        'Authorization': `Bearer ${token}`
                    }
                    const serverResponce = await onRemoveStaffs(staffID, header)
                    if (serverResponce.status == 200) {
                        toast.success(
                            "Staff Account deleted successfully! All associated data has been permanently removed.",
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
                          setNot("User Management")
                    handleCloseStaff()
                    }else{
                        toast.error("Please try again!")
                    }

                } catch (error) {
                    console.log(error)
                }
            
        } else {
            toast.error("Please login again!")
            navigate('/login')
        }
    }

    useEffect(() => {
        if (search == "") {
            setData(staffs)
        } else {
            const filtered = staffs?.filter((a) => a['firstname'].toLowerCase().includes(search.toLowerCase())||a['role']==search.toLowerCase())
            setData(filtered)
        }
    }, [staffs, search])




    useEffect(() => {
        fetchStaffs()
    }, [not])




    return (
        <div className='home-admin-userdetails-parent'>

            <div className="home-admin-user-details-heading">
                <h1>Staff Management</h1>
                <p>Manage staff details</p>
            </div>
            <div className="home-admin-user-details-search home-admin-search-staff" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search user' />
                    <button className='ms-2'>Search</button>
                </div>

                <Form.Select onChange={(e)=>setSearch(e.target.value)} aria-label="Default select example"  style={{ width: '180px' }} className='float-end'>
                    <option value="" disabled>Select staff by role</option>
                    <option value="">All</option>
                    {staffData.map((a) => (
                        <option value={a.value} key={a.label}>{a.label}</option>
                    ))}
                </Form.Select>

            </div>
            <div className="home-admin-user-details-table-parent">
                {data?.length > 0 ? data?.map((a, key) => (
                    <>
                        <div key={key} className="user-details-table-card-main">
                            <div>
                                <img src={`http://localhost:3000/uploads/${a.imageurl}`} alt="" />
                                <h2>{a?.firstname} {a?.lastname}</h2>
                                <h6>{a?.role}</h6>
                            </div>
                            <main>
                                <p>Active</p>
                                <button onClick={() => handleShow(a._id)}>Send a notification</button>

                                <button onClick={()=>handleShowStaff(a._id)}>Remove</button>
                            </main>
                        </div>
                        <hr />
                    </>
                )) : <p>No staff found!</p>}


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
                                <Form.Control onChange={(e) => setNotification({ ...notfication, title: e.target.value })} type="text" placeholder="Enter title" className="cursor-pointer" required style={{ width: '100%' }} />
                            </FloatingLabel>
                        </div>
                        <div>
                            <div>

                                <p>Provide a brief message that will be sent as a notification.</p>
                                <FloatingLabel controlId="message" label="Message" className="mb-3">
                                    <Form.Control as="textarea" onChange={(e) => setNotification({ ...notfication, message: e.target.value })} placeholder="Enter message" className="cursor-pointer" required style={{ width: '100%', height: '200px' }} />
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

            <Modal show={showStaff} onHide={handleCloseStaff} size='md'>
                <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
                    <Modal.Title className='text-light'>Delete Account</Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Modal.Body style={{ background: 'gray' }}>
                        <p>Are you sure you want to delete this user account?</p>

                        <p style={{ fontSize: '12px' }}>Once deleted, all associated account information and transaction history will be permanently removed. This action cannot be undone.</p>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Button variant="secondary" onClick={handleCloseStaff}>
                        Close
                    </Button>
                    <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={deleteStaffAccount}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default HomeAdminStaffManagement
