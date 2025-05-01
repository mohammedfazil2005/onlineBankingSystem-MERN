import React, { useEffect, useState } from 'react'
import './HomeAdminTransactions.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { onFetchAllBankTransactions, onFetchAllTransactions } from '../../../../services/allAPI'
import { generateStyledTransactionPDF } from '../../../../services/TransactionPDF'
const HomeAdminTransactions = () => {

    const [transaction,setTransaction]=useState([])
    const navigate=useNavigate()
    const [currentPage,setCurrentPage]=useState(1)

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

    let transactionPerPage=6

    let totalpages=Math.ceil(transaction?.length/transactionPerPage)
    let lastIndex=currentPage* transactionPerPage
    let firstIndex=lastIndex-transactionPerPage

    let slicedData=transaction?.slice(firstIndex,lastIndex)

    const onForward=()=>{
        if(currentPage<totalpages){
            setCurrentPage(currentPage+1)
        }
       }
    
       const onBackward=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
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
        <p>TransactionID</p>
       
        <p>Amount</p>
        <p>Status</p>
        <p>Export</p>

      </div>


     {slicedData?.length>0?slicedData?.map((a,key)=>(
         <div className="home-admin-dashboard-transaction-table" style={{ borderBottom: '1px solid lightgray' }}>

          <p>{key+1}</p>
    
         <p>{a?.date}</p>
          <p>{a?.transactionID||'17459156866921'}</p>
    
         <p>₹{a?.amount}</p>
         <p>{a?.status}</p>
         <button onClick={()=>generateStyledTransactionPDF(a)}> Recipet</button>
 
       </div>
     )):<p>No transaction found!</p>}

<div className='d-flex align-items-center justify-content-center'>
                <button className='btn' onClick={onBackward}><i class="fa-solid fa-arrow-left"></i></button>
                <p>{currentPage} of {totalpages}</p>
                <button className='btn' onClick={onForward}><i class="fa-solid fa-arrow-right"></i></button>
            </div>

     
           

        </div>
    )
}

export default HomeAdminTransactions
