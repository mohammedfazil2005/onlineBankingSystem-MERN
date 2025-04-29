import React, { useEffect, useState } from 'react'
import './HomeAdminTransactions.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { onFetchAllBankTransactions, onFetchAllTransactions } from '../../../../services/allAPI'
import { generateStyledTransactionPDF } from '../../../../services/TransactionPDF'
const HomeAdminTransactions = () => {

    const [transaction,setTransaction]=useState([])
    const navigate=useNavigate()

    const fetchTransaction=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const header={
                'Authorization':`Bearer ${token}`
            }
            try {
                const serverResponce=await onFetchAllBankTransactions(header)
               
                if(serverResponce.status==200){
                    setTransaction(serverResponce.data)
                }
            } catch (error) {
                console.log(error)
            }

        }else{
            navigate('/login')
            toast.error("Please Login Again!")
        }
    }

    useEffect(()=>{
        fetchTransaction()
    },[])

    console.log(transaction)




    return (
        <div className='home-admin-transactions-parent'>
             <div className="heading-dashboard">
        <h1>All Transactions</h1>
        <p>Overview of all transactions made within the banking system.</p>
      </div>
    
            <div className="home-admin-dashboard-transaction-table mt-4">
        <p>#</p>
        <p>Date</p>
        <p>transactionID</p>
       
        <p>Amount</p>
        <p>status</p>
        <p>Export</p>

      </div>


     {transaction?.length>0?transaction?.map((a,key)=>(
         <div className="home-admin-dashboard-transaction-table" style={{ borderBottom: '1px solid lightgray' }}>

          <p>{key+1}</p>
    
         <p>{a?.date}</p>
          <p>{a?.transactionID||'17459156866921'}</p>
    
         <p>₹{a?.amount}</p>
         <p>{a?.status}</p>
         <button onClick={()=>generateStyledTransactionPDF(a)}> Recipet</button>
 
       </div>
     )):<p>No transaction found!</p>}

     
           

        </div>
    )
}

export default HomeAdminTransactions
