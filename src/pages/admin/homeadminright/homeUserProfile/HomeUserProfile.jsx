import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './HomeUserProfile.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)
import { Button, FloatingLabel, Modal } from 'react-bootstrap'



const HomeUserProfile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Credit",
                data: [20, 20, 7, 30],
                borderColor: "rgba(255, 99, 132, 1)", // Red
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.4
            },
            {
                label: "Debit",
                data: [5, 8, 12, 10],
                borderColor: "rgba(54, 162, 235, 1)", // Blue
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4
            }
        ]
    }

    const Lineoptions = {
        responsive: true,  // Enables responsiveness
        maintainAspectRatio: false, // Allows custom width & height
    };






    return (
        <div className='home-user-profile-parent'>
            <div className="home-user-profile-heading">
                {/* <h2>User profile</h2> */}
            </div>

            <div className="home-user-profile-admin-parent">
                <div className="home-user-profile-admin-heading">
                    <main>
                        <div>
                            <img src="https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                        <div>
                            <h6>Cameron Willamson</h6>
                            <p>Kerala</p>
                        </div>
                    </main>
                    <main>
                        <div>
                            <button onClick={handleShow}>Send Notifcation</button>
                        </div>
                    </main>
                </div>
                <div className="home-user-profile-admin-details">
                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-user"></i>
                            <span> Name: John Doe </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-user-shield"></i>
                            <span> Role: Customer </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-envelope"></i>
                            <span> Email: john.doe@example.com </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-phone"></i>
                            <span> Phone: +91 98765 43210 </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-toggle-on"></i>
                            <span> Status: Active </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-wallet"></i>
                            <span> Monthly Income: ₹5000 </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-clock"></i>
                            <span> Last Login: 18 March 2025, 10:30 AM </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-map-marker-alt"></i>
                            <span> Address: Kerala, India </span>
                        </h6>
                    </div>



                </div>
            </div>






            <div className="home-user-details-parent">
                <div className="user-card-details-card-parent">


                    <div className="user-card-admin-main">
                        <div className='user-card-admin-details'>
                            <h1>DEBIT</h1>

                            <p>Available Balance: ₹3,999</p>
                            <p>Expiry Date: 08/27</p>
                            <div>
                                <button>Delete Card</button>  {/* Removes the card permanently */}
                                <button>Freeze Card</button>  {/* Temporarily disables the card */}
                                <button>Report Lost/Stolen</button>  {/* Marks the card as lost or stolen */}
                            </div>
                        </div>


                        <div>
                            <div className="user-card-div-main">
                                <div className='main-card'>
                                    <div className='main-card-heading'>
                                        <h5>Bank Ai</h5>
                                        <p>Debit</p>
                                    </div>
                                    <div className='main-card-user-details'>
                                        <h4>ADRIAN HADJIN</h4>
                                        <p>06/24</p>
                                    </div>
                                    <div className='main-card-card-details'>
                                        <p><span>****</span><span>****</span> <span>****</span></p>
                                        <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>


                    <div className="user-card-admin-main">
                        <div className='user-card-admin-details'>
                            <h1>CREDIT</h1>

                            <p>Available Balance: ₹3,999</p>


                            <p>Expiry Date: 08/27</p>
                            <div>
                                <button>Delete Card</button>  {/* Removes the card permanently */}
                                <button>Freeze Card</button>  {/* Temporarily disables the card */}
                                <button>Report Lost/Stolen</button>  {/* Marks the card as lost or stolen */}
                            </div>
                        </div>


                        <div>
                            <div className="user-card-div-main">
                                <div className='main-card' style={{ background: 'url(https://img.freepik.com/free-vector/premium-round-golden-frame-red-background-design_1017-54880.jpg)' }}>
                                    <div className='main-card-heading'>
                                        <h5>Bank Ai</h5>
                                        <p>Credit</p>
                                    </div>
                                    <div className='main-card-user-details'>
                                        <h4>ADRIAN HADJIN</h4>
                                        <p>06/24</p>
                                    </div>
                                    <div className='main-card-card-details'>
                                        <p><span>****</span><span>****</span> <span>****</span></p>
                                        <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading-dashboard" style={{ marginTop: '50px' }}>
                    <h1 style={{ fontSize: '24px' }}>User Transaction Analysis</h1>
                    <p>Review and analyze user credit and debit card transactions.</p>
                </div>
                <div>
                    <Line data={lineData} options={Lineoptions} style={{ minHeight: '300px' }} />
                </div>




                <div className="user-dashboard-transactions" style={{ marginTop: '60px' }}>
                    <div className="user-dashboard-transactions-heading">
                        <h1>Recent transactions</h1>
                        <button>View all</button>
                    </div>
                    <div className="user-banks-name">
                        <button style={{ borderBottom: '2px solid blueviolet' }}>All Transactions</button>
                        <button>Income </button>
                        <button>Expense </button>
                    </div>
                    <div className="user-bank-balance">

                        <div>
                            <Form.Select aria-label="Select card">
                                <option value="">Select Card</option>
                                <option value="debit">Debit Card</option>
                                <option value="credit">Credit Card</option>

                            </Form.Select>
                        </div>
                    </div>
                    <div className="home-admin-dashboard-transaction-table">
                        <p>#</p>
                        <p>Name</p>
                        <p>Date</p>
                        <p>Transaction Type</p>
                        <p>Amount</p>
                        <p>Status</p>
                        <p>Export</p>

                    </div>

                    <div className="home-admin-dashboard-transaction-table" style={{ borderBottom: '1px solid lightgray' }}>

                        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />
                        <p>Mohammed fazil</p>
                        <p>10/2/2024</p>
                        <p>Deposit</p>
                        <p>₹299</p>
                        <p>Success</p>
                        <button> Recipet</button>

                    </div>
                </div>

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
                                    <Form.Control as="textarea" placeholder="Enter message" className="cursor-pointer" required style={{ width: '100%', height: '200px' }} />
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

export default HomeUserProfile
