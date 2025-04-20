import React from 'react'
import './HomeAdminLoanRequests.css'
import { Link } from 'react-router-dom'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq.css'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq'

const HomeAdminLoanRequests = () => {
  return (
    <div className='home-admin-loan-requests-parent'>

      <div className="home-admin-loan-requests-heading">
        <h1>Loan Requests</h1>
        <p>Review and manage all pending loan applications submitted by users</p>
      </div>


      <div className="home-admin-credit-req-tables heading-req-table mb-3">
        <p>FULL NAME</p>
        <p>Loan Type </p>
        <p> Loan Duration</p>
        <p>Requested Amount</p>
        <p>Interest Rate</p>
        <p>Profile</p>
        <p>...</p>
      </div>
      <div className="home-admin-credit-req-tables heading-req-content mb-3">
        <div>
          <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" style={{width:'40px',height:'40px',borderRadius:'50%'}} alt="" />
          <p>Mohammed fazil</p>
        </div>
        <p>Personal</p>
        <p>12 months</p>
        <p>₹20000</p>
        <p>10%</p>
        <Link>View Profile</Link>
        <div className='btn-loan-req-div'>
          <button>Approve</button>
          <button>Reject</button>
        </div>
      </div>

     

    </div>
  )
}

export default HomeAdminLoanRequests
