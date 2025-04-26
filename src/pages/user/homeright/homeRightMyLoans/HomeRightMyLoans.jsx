import React, { useEffect, useState } from 'react'
import './HomeRightMyLoans.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onFetchLoans } from '../../../../services/allAPI'
const HomeRightMyLoans = ({setCategoryName}) => {

    const [activeloans,setActiveLoans]=useState([])
    const [requestedLoans,setRequestedLoans]=useState([])

    const navigate=useNavigate()

    const fetchLoans=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const header={
                'Authorization':`Bearer ${token}`
            }
            try {
                const serverResponce=await onFetchLoans(header)
                if(serverResponce.status==200){
                    setActiveLoans(serverResponce.data.loans)
                    setRequestedLoans(serverResponce.data.requestedLoans)
                }else{
                    toast.error("Something went wrong!")
                }
            } catch (error) {
                console.log(error)
            }

        }else{
            toast.error("Please Login Again!")
            navigate("/login")
        }
    }

    useEffect(()=>{
        fetchLoans()
    },[])

    console.log(requestedLoans)
    console.log(activeloans)



  return (
    <div className='home-right-my-loans-parent'>
        <div className="home-right-my-loans-heading">
        <h1>My Loans</h1>
        <p>View and manage your active loans</p>
        </div>
        <div className="my-loans-cards-parent">
            <div className="my-loans-card-main">
                <div>
                <h4>Loan type :<span>Personal</span></h4>
                <h4>Loan Amount :<span>₹3000</span></h4>
                <h4>Loan Duration :<span>12months</span></h4>
                <h4>Interest Rate (%):<span>15%</span></h4>
                <h4>Remaining Loan Balance: <span>₹2,700</span></h4> 
                <h4>Next EMI Due: <span>15th March 2025</span></h4> 
                 <main>
                    <button onClick={()=>setCategoryName("payloan")}>Pay EMI</button>
                    <button onClick={()=>setCategoryName("payloan")}>Pay Full Loan Amount</button>
                 </main>
                </div>
                <div>
                    <button id='download-loan-recipet'>Download Loan Receipt</button>
                </div>
            </div>
            
        </div>

        <div className="home-right-my-loans-heading">
        <h2>Requested Loans</h2>  
        <p>View your loan applications that are currently <br />
         pending approval or have been denied.</p>
        </div>

        <div className="my-loans-cards-parent">
            {requestedLoans?.length>0?requestedLoans?.map((a)=>(
                <div className="my-loans-card-main" style={{border:'1px solid #660e19',width:'400px'}}>
                <div>
                <h4>Loan type :<span style={{color:'gray'}}>{a?.loanType}</span></h4>
                <h4>Loan Amount :<span style={{color:'gray'}}>₹{a?.amount}</span></h4>
                <h4>Loan Duration :<span style={{color:'gray'}}>{a?.loanDuration} Years</span></h4>
                <h4>Interest Rate (%):<span style={{color:'gray'}}>{a?.interestRate}%</span></h4>
                <h4>Status:<span style={{color:'gray'}}>{a?.status}</span></h4>
                 <main>
                    <button>Cancel Loan Request</button>
                 
                 </main>
                </div>
                <div>
                   ...
                </div>
            </div>
            )):""}
            
        </div>

        <div className='mb-2'>

        </div>



    </div>
  )
}

export default HomeRightMyLoans
