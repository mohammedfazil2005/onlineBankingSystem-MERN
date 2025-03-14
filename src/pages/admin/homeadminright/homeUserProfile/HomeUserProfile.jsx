import React from 'react'
import { Form } from 'react-bootstrap'
import './HomeUserProfile.css'
import { BarChart } from '@mui/x-charts'
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';



const HomeUserProfile = () => {
    return (
        <div className='home-user-profile-parent'>
            <div className="home-user-profile-heading">
                {/* <h2>User profile</h2> */}
            </div>
            <div className="home-user-details-heading">
                <div className='d-flex align-items-center'>
                    <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                    <div className='ms-3'>
                        <h6>Raw jhoncy</h6>
                        <p>Kerala</p>
                    </div>
                </div>
                <div>
                    <button>Send a Message</button>
                </div>
            </div>
            <div className="home-user-details-parent">
                <div className="user-dashboard-transactions-heading">
                    <h1>Card details</h1>
                </div>
                <div className="user-card-admin-main">
                    <div className='user-card-admin-details'>
                        <h1>DEBIT</h1>
                        <h6>Select Card (Debit / Credit)</h6>
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
                        <h6>Select Card (Debit / Credit)</h6>
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

                    <BarChart
                        xAxis={[{ scaleType: "band", data: ["Debit", "Credit", ] }]}
                        series={[{ data: [4, 3] }, { data: [1, 3] }]}
                        height={300}  // No need for width; it adapts automatically!
                        width={600}
                    />
            \




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
                        <div className='user-bank-balance-heading'>
                            <img src="https://logowik.com/content/uploads/images/bank3801.jpg" alt="image-logo" />
                            <div>
                                <h6>Chase Bank</h6>
                                <p>₹2993</p>
                            </div>
                        </div>
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
