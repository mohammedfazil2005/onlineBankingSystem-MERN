import React from 'react'
import './HomeRightTransactionHistory.css'
import Dropdown from 'react-bootstrap/Dropdown';
const HomeRightTransactionHistory = () => {
    return (
        <div className='user-transaction-history-parent'>
            <div className="user-transaction-history-heading">
                <div>
                    <h1>Transaction history</h1>
                    <p>Gain insights and Track Your Transactions Over Time</p>
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor:'blueviolet'}} id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="user-transaction-account-details">
                <div>
                    <h1>Chase</h1>
                    <h6>Chase Growth Savings Account</h6>
                    <p>*******960</p>
                </div>
                <div>
                    <div className='user-transaction-account-details-right-div'>
                        <h4>Current Balance</h4>
                        <h1>₹41,000</h1>
                    </div>
                </div>
            </div>
            <div className="user-transaction-history-full">
                <div className="user-transaction-history-list-heading">
                    <h2>Transaction history</h2>
                    <button>Apply filter</button>
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
    )
}

export default HomeRightTransactionHistory
