import React, { useEffect, useState } from 'react'
import { onFetchApprovedLoan } from '../../../../services/allAPI'
import { generateLoanReceiptPDF } from '../../../../services/LoanRecipet'

const HomeAdminApprovedLoan = () => {

    const [loans,setLoans]=useState([])

      const fetchLoans=async()=>{
            const token=sessionStorage.getItem("token")
            if(token){
                const header={
                    'Authorization':`Bearer ${token}`
                }
                try {
                    const serverResponce=await onFetchApprovedLoan(header)
                    if(serverResponce.status==200){
                        setLoans(serverResponce.data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }else{
                navigate('/login')
                alert("Please login again!")
            }
        }

        useEffect(()=>{
            fetchLoans()
        },[])
    


    return (
        <div  style={{display:'flex',flexDirection:'column',gap:'40px'}}>
            <div className="heading-dashboard">
                <h1>All Approved Loans</h1>
                <p>Review and manage all approved loan applications submitted by users within the banking system.</p>
            </div>
            <div className="my-loans-cards-parent">
               {loans?.length>0?loans?.map((a,key)=>(
                 <div key={key}  className="my-loans-card-main">
                 <div>
                     <h4>Loan type :<span>{a?.loantype}</span></h4>
                     <h4>Loan Amount :<span>₹{a?.loanamount}</span></h4>
                     <h4>Loan Duration :<span>{a?.loanduration} Year</span></h4>
                     <h4>Interest Rate (%):<span>{a?.interestrate}%</span></h4>
                     <h4>Remaining Loan Balance: <span>₹{a?.remainingloanamount}</span></h4>
                     <h4>Next EMI Due: <span>{a?.EMIdate}</span></h4>
                     <h4> EMI Amount: <span>₹{a?.EMIAmount}</span></h4>
                    
                 </div>
                 <div>
                     <button id='download-loan-recipet' onClick={()=>generateLoanReceiptPDF(a)}>Download Loan Receipt</button>
                 </div>
             </div>
               )): <div className=' w-100'><p className='text-center'>Looks like no active loan at the moment!</p></div>}
               </div>


           
        </div>
      
    )
}

export default HomeAdminApprovedLoan
