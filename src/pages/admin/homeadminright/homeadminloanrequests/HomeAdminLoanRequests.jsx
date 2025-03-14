import React from 'react'
import './HomeAdminLoanRequests.css'
const HomeAdminLoanRequests = () => {
  return (
    <div className='home-admin-loan-requests-parent'>

        <div className="home-admin-loan-requests-heading">
            <h1>Loan Requests</h1>
        </div>
        <div className="home-admin-loan-main">

        <div className="home-admin-loan-parent-box">
            <div className='home-admin-loan-left'>
                <div className='home-loan-profile-admin'>
                <img src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?semt=ais_hybrid" alt="" />
                <button><i className="fa-solid fa-user"></i></button>
             
                </div>
                <h5>Name: <span>Jhon</span></h5>
                <h5>Loan Type: <span>Personal</span></h5>
                <h5>Loan Duration: <span>12 months</span></h5>
                <h5>Monthly income: <span>₹20000</span></h5>
                <div className='button-div-loan-admin'>
                <button>Approve</button>
                <button>Reject</button>
            </div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default HomeAdminLoanRequests
