import React, { useEffect, useState } from 'react'
import './HomeAdminNotifications.css'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { onFetchAllBankNotifications, onFetchAllNotifications, onSendNotificationToAllUsers } from '../../../../services/allAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const HomeAdminNotifications = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate=useNavigate()

    const [notifications,setNotification]=useState([])
    const [not,setNot]=useState('')
    const [notficationDetails,setNotificationDetails]=useState({
        title:"",
        message:""
    })

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

    useEffect(()=>{
        fetchNotifications()
    },[notifications])

    console.log(notifications)




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
                {notifications?.length>0?notifications?.map((a,key)=>(
                    <>
                      <div key={key} className='notification-table-main'>
                    <div>
                        <i className='fa-solid fa-bell'></i>
                        <p>{a?.message?.length>80?a?.message.slice(0,70):a?.message}...</p>
                      
                    </div>
                    <div>
                        <button>View</button>
                    </div>
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
        </div>
    )
}

export default HomeAdminNotifications
