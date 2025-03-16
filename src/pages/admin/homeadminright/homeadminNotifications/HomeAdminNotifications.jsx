import React, { useState } from 'react'
import './HomeAdminNotifications.css'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'


const HomeAdminNotifications = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <div className='notification-table-main'>
                    <div>
                        <i className='fa-solid fa-bell'></i>
                        <p>Your Fixed Deposit of ₹1,00,000 will..</p>
                    </div>
                    <div>
                        <button>View</button>
                    </div>
                </div>
                <hr />
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

export default HomeAdminNotifications
