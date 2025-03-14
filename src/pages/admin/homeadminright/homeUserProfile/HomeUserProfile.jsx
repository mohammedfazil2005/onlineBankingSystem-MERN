import React from 'react'
import { Form } from 'react-bootstrap'
import './HomeUserProfile.css'


const HomeUserProfile = () => {
  return (
    <div className='home-user-profile-parent'>
   <div className="home-user-profile-heading">
    <h2>User profile</h2>
   </div>
   <div className="home-user-details-parent">
    <div className="home-user-details-heading">
        <img src="" alt="" />
        <div>
            <h6>Raw jhoncy</h6>
            <p>Kerala</p>
        </div>
    </div>
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
      <div className="user-dashboard-transactions" style={{marginTop:'60px'}}>
        <div className="user-dashboard-transactions-heading">
            <h1>Recent transactions</h1>
            <button>View all</button>
        </div>
        <div className="user-banks-name">
            <button style={{borderBottom:'2px solid blueviolet'}}>All Transactions</button>
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
