import React, { useEffect, useState } from 'react'
import './HomeAdminLoanRequests.css'
import { Link, useNavigate } from 'react-router-dom'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq.css'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq'
import { onFetchLoanRequests } from '../../../../services/allAPI'

const HomeAdminLoanRequests = () => {
  const navigate=useNavigate()
  

    const [loanRequests,setLoanRequests]=useState([])

    const fetchCreditCardRequests=async()=>{
        const token=sessionStorage.getItem('token')
        if(token){

            const header={
                'Authorization':`Bearer ${token}`
            }

            try {
                const serverResponce=await onFetchLoanRequests(header)
                if(serverResponce.status==200){
                  setLoanRequests(serverResponce.data)
                }
            } catch (error) {
                console.log(error)
            }

        }else{
            navigate('/login')
            toast.error("Please login again!")
        }
    }

    useEffect(()=>{
        fetchCreditCardRequests()
    },[])

    console.log(loanRequests)
    
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
      {loanRequests?.length>0?loanRequests?.map((a,key)=>(
        <div className="home-admin-credit-req-tables heading-req-content mb-3">
        <div>
          {/* <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" style={{width:'40px',height:'40px',borderRadius:'50%'}} alt="" /> */}
          <p>{a?.fullname}</p>
        </div>
        <p>{a?.loanType}</p>
        <p>{a?.loanDuration} years</p>
        <p>₹{a?.requestedAmount}</p>
        <p>{a.interestRate}%</p>
        <Link>View Profile</Link>
        <div className='btn-loan-req-div'>
          <button>Approve</button>
          <button>Reject</button>
        </div>
      </div>
      )):""}

     

    </div>
  )
}

export default HomeAdminLoanRequests
