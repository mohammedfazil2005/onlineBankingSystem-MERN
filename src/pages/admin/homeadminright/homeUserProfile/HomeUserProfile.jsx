import React from 'react'
import { Form } from 'react-bootstrap'
import './HomeUserProfile.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)


const HomeUserProfile = () => {

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
            <div className="home-user-details-heading">
                    <div className='home-user-profile-details-left'>
                    <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                        {/* <h6><span>Raw jhoncy</span></h6> */}
                        <button>Send a Notification</button>
                    </div>
        
                <div className='home-user-profile-details-right'>
                    <main>
                    <div>
                        <h6>Name :<span>Jhoncy</span></h6>
                    </div>
                    <div>
                        <h6>Gender :<span>Male</span></h6>
                    </div>
                    <div>
                        <h6>Date of birth :<span>12/25/1999</span></h6>
                    </div>
                    </main>
                    <main>
                    <div>
                        <h6>State :<span>Kerala</span></h6>
                    </div>
                    <div>
                        <h6>Email :<span>jhoncy@gmail.com</span></h6>
                    </div>
                    <div>
                        <h6>Phone :<span>+91 9961423960</span></h6>
                    </div>
                    </main>
                
                </div>
            </div>
            <div className="home-user-details-parent">
                <div className="user-dashboard-transactions-heading">

                </div>
                <div className="user-card-admin-main">
                    <div className='user-card-admin-details'>
                        <h1>DEBIT</h1>

                        <p>Available Balance: ₹3,999</p>

                        <p>Bank Name: MyBank</p>
                        <p>Card Type: Visa</p>
                        <p>Card Number: **** 1234</p>
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
                                    <p><span>1234</span><span>1234</span> <span>1234</span></p>
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

                        <p>Bank Name: MyBank</p>
                        <p>Card Type: Visa</p>
                        <p>Card Number: **** 1234</p>
                        <p>Expiry Date: 08/27</p>
                        <div>
                            <button>Delete Card</button>  {/* Removes the card permanently */}
                            <button>Freeze Card</button>  {/* Temporarily disables the card */}
                            <button>Report Lost/Stolen</button>  {/* Marks the card as lost or stolen */}
                        </div>
                    </div>


                    <div>
                        <div className="user-card-div-main">
                            <div className='main-card' style={{ background: 'url(https://img.freepik.com/free-vector/red-wavy-background_1189-269.jpg?t=st=1742144590~exp=1742148190~hmac=58499faebca52b4edf5bbae339e2b93062d3cbd7b10432b9bf782e4c4da83de8&w=826)' }}>
                                <div className='main-card-heading'>
                                    <h5>Bank Ai</h5>
                                    <p>Debit</p>
                                </div>
                                <div className='main-card-user-details'>
                                    <h4>ADRIAN HADJIN</h4>
                                    <p>06/24</p>
                                </div>
                                <div className='main-card-card-details'>
                                    <p><span>1234</span><span>1234</span> <span>1234</span></p>
                                    <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className="heading-dashboard" style={{marginTop:'50px'}}>
                    <h1 style={{fontSize:'24px'}}>User Transaction Analysis</h1>
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
                    <div className="user-transaction-list">
                        <p>#</p>
                        <p>Transactions</p>
                        <p>Amount</p>
                        <p>Status</p>
                        <p>Date</p>
                        <p>Download</p>
                    </div>
                    <div className="user-transaction-list">
                        <p>1</p>
                        <p>Kumar</p>
                        <p>200</p>
                        <p>Processing</p>
                        <p>Wed 11:00pm</p>
                        <button>Download</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeUserProfile
