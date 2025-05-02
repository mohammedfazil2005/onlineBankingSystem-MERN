import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import './HomeUserProfile.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)
import { Button, FloatingLabel, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onActivateCard, onDeleteUserAccount, onFetchUserDeatils, onFreezeCard, onSendNotificationToUser } from '../../../../services/allAPI'
import { AuthContext } from '../../../../contexts/TokenContext'
import { generateStyledTransactionPDF } from '../../../../services/TransactionPDF'



const HomeUserProfile = ({setCategoryName}) => {

    const navigate = useNavigate()
    const { userID } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    const [deleteShow, setDeletshow] = useState(false);

    const [userdata, setUserdata] = useState({})
    const [not, setNot] = useState('')
    const [notficationDetails, setNotificationDetails] = useState({
        title: "",
        message: ""
    })





    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteClose = () => setDeletshow(false);
    const handleDeleteShow = () => {
        setDeletshow(true)
        console.log(userdata.id)
    };

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

    const fetchUserDetails = async () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            try {
                const serverResponce = await onFetchUserDeatils(userID, header)
                if (serverResponce.status == 200) {
                    setUserdata(serverResponce.data)
                } else {
                    toast.error("Error fetching data!")
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            navigate('/login')
            toast.error("please login again!")
        }
    }

    const sendNotifications = async (id) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            if (notficationDetails.title && notficationDetails.message) {
                try {
                    const header = {
                        'Authorization': `Bearer ${token}`
                    }
                    const serverResponce = await onSendNotificationToUser(id, notficationDetails, header)
                    if (serverResponce.status == 200) {
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
            } else {
                toast.error("Oops! Looks like you missed something. Kindly enter both a title and a message.")
            }

        } else {
            toast.error("Please login again!")
            navigate('/login')
        }
    }

    const deleteUserAccount = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            
                try {
                    const header = {
                        'Authorization': `Bearer ${token}`
                    }
                    const serverResponce = await onDeleteUserAccount(userdata.id, header)
                    if (serverResponce.status == 200) {
                        toast.success(
                            "Account deleted successfully! All associated data has been permanently removed.",
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
                        setCategoryName("Account holders")
                        handleDeleteClose()
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

    const freezeCard=async(id,accountno)=>{
        
        const token = sessionStorage.getItem("token")
        if (token) {
            
                try {
                    const header = {
                        'Authorization': `Bearer ${token}`
                    }
                    const payload={
                        userID:id,
                        accountNumber:accountno
                    }
                    const serverResponce = await onFreezeCard(payload,header)
                    if (serverResponce.status == 200) {
                        toast.success(
                            "Account frozen!",
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
                       setNot("done")
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

    const activateCard=async(id,accountno)=>{
        
        const token = sessionStorage.getItem("token")
        if (token) {
            
                try {
                    const header = {
                        'Authorization': `Bearer ${token}`
                    }
                    const payload={
                        userID:id,
                        accountNumber:accountno
                    }
                    const serverResponce = await onActivateCard(payload,header)
                    setNot("done")
                    if (serverResponce.status == 200) {
                        toast.success(
                            "Account Activated!",
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
        fetchUserDetails()

    }, [userID,not])

    console.log(userdata)







    return (
        <div className='home-user-profile-parent'>
            <div className="home-user-profile-heading">
                {/* <h2>User profile</h2> */}
            </div>

            <div className="home-user-profile-admin-parent">
                <div className="home-user-profile-admin-heading">
                    <main>
                        <div>
                            <img src={`http://localhost:3000/uploads/${userdata?.profileimage}`} alt="" />
                        </div>
                        <div>
                            <h6>{userdata?.name}</h6>
                            <p>(Holder)</p>
                        </div>
                    </main>
                    <main>
                        <div>
                            <button onClick={handleShow}>Send Notifcation</button>
                            <button onClick={handleDeleteShow}>Delete Account</button>
                        </div>
                    </main>
                </div>
                <div className="home-user-profile-admin-details">
                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-user"></i>
                            <span> Name: {userdata?.name}</span>
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
                            <span> Email:  {userdata?.email} </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-phone"></i>
                            <span> Phone: {userdata?.phone} </span>
                        </h6>
                    </div>


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-toggle-on"></i>
                            <span> Status: Active </span>
                        </h6>
                    </div>


                    {/* <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-wallet"></i>
                            <span> Monthly Income: ₹5000 </span>
                        </h6>
                    </div> */}


                    {/* <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-clock"></i>
                            <span> Last Login: 18 March 2025, 10:30 AM </span>
                        </h6>
                    </div> */}


                    <div className="admin-profile-detail">
                        <h6>
                            <i class="fa-solid fa-map-marker-alt"></i>
                            <span> Address: {userdata?.Address}</span>
                        </h6>
                    </div>



                </div>
            </div>






            <div className="home-user-details-parent">
                <div className="user-card-details-card-parent">


                    <div className="user-card-admin-main">
                        <div className='user-card-admin-details'>
                            <h1>DEBIT</h1>

                            <p>Available Balance: ₹{userdata?.debitCard?.cardBalance}</p>
                            <p>Expiry Date: {userdata?.debitCard?.cardExpiryDate}</p>
                            <div>
                                {userdata?.debitCard?.status=="active"? <button onClick={()=>freezeCard(userdata?.id,userdata?.debitCard?.accountNumber)}>Freeze Card</button>:<button onClick={()=>activateCard(userdata?.id,userdata?.debitCard?.accountNumber)}>Activate Card</button>}
                               

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

                    <>
                        {userdata?.creditcards?.length > 0 ? userdata?.creditcards?.map((a,key) => (
                            <div key={key} className="user-card-admin-main">
                                <div className='user-card-admin-details'>
                                    <h1>CREDIT</h1>

                                    <p>Available Balance: ₹{a?.cardBalance}</p>


                                    <p>Expiry Date: {a?.cardExpiryDate}</p>
                                    <div>
                                        <button>Delete Card</button>  {/* Removes the card permanently */}
                                        <button>Freeze Card</button>  {/* Temporarily disables the card */}

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
                        )) : ""}
                    </>



                </div>
                <div className="heading-dashboard" style={{ marginTop: '50px' }}>
                    <h1 style={{ fontSize: '24px' }}>User Transaction Analysis</h1>
                    <p>Review and analyze user credit and debit card transactions.</p>
                </div>
                {/* <div>
                    <Line data={lineData} options={Lineoptions} style={{ minHeight: '300px' }} />
                </div> */}




                <div className="user-dashboard-transactions" style={{ marginTop: '60px' }}>
                    <div className="user-dashboard-transactions-heading">
                        <h1>Recent transactions</h1>
                        
                    </div>
                    <div className="user-banks-name">
                        <button style={{ borderBottom: '2px solid blueviolet' }}>All Transactions</button>
                       
                    </div>
                    
                    <div className="home-admin-dashboard-transaction-table">
                        <p>#</p>
                      
                        <p>Date</p>
                        <p>Transaction Type</p>
                        <p>Amount</p>
                        <p>Status</p>
                        <p>Export</p>

                    </div>

                    {userdata?.transactions?.length > 0 ? userdata?.transactions?.map((a, key) => (
                        <div key={key} className="home-admin-dashboard-transaction-table" style={{ borderBottom: '1px solid lightgray' }}>

                         <p>{a?.transactionID||"1745928720203"}</p>
                           
                            <p>{a?.date}</p>
                            <p>{a?.transactionType}</p>
                            <p>₹{a?.amount}</p>
                            <p>Success</p>
                            <button onClick={()=>generateStyledTransactionPDF(a)}> Recipet</button>

                        </div>
                    )) : ""}
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
                                <Form.Control onChange={((e) => setNotificationDetails({ ...notficationDetails, title: e.target.value }))} type="text" placeholder="Enter title" className="cursor-pointer" required style={{ width: '100%' }} />
                            </FloatingLabel>
                        </div>
                        <div>
                            <div>

                                <p>Provide a brief message that will be sent as a notification.</p>
                                <FloatingLabel controlId="message" label="Message" className="mb-3">
                                    <Form.Control onChange={((e) => setNotificationDetails({ ...notficationDetails, message: e.target.value }))} as="textarea" placeholder="Enter message" className="cursor-pointer" required style={{ width: '100%', height: '200px' }} />
                                </FloatingLabel>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => sendNotifications(userdata?.id)}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deleteShow} onHide={handleDeleteClose} size='md'>
                <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
                    <Modal.Title className='text-light'>Delete Account</Modal.Title>
                </Modal.Header>
               
                <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Modal.Body style={{ background: 'gray' }}>
                        <p>Are you sure you want to delete this user account?</p>

                       
                           
                        

                     

                        <p style={{fontSize:'12px'}}>Once deleted, all associated account information and transaction history will be permanently removed. This action cannot be undone.</p>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Close
                    </Button>
                    <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={deleteUserAccount}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomeUserProfile
