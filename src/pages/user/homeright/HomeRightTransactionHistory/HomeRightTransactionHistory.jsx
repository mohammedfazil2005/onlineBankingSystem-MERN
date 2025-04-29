import React, { useEffect, useState } from 'react'
import './HomeRightTransactionHistory.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { onFetchAllTransactions } from '../../../../services/allAPI';
import { generateStyledTransactionPDF } from '../../../../services/TransactionPDF';

const HomeRightTransactionHistory = () => {
    const [transactions,setTransactions]=useState([])
    const navigate=useNavigate()

    const fetchTransactions=async()=>{
        const token= sessionStorage.getItem("token")
       if(token){
        const header={
            'Authorization':`Bearer ${token}`
        }
        try {
            const serverResponce=await onFetchAllTransactions(header)
            if(serverResponce.status==200){
                setTransactions(serverResponce.data)
            }else{
                alert("Please Login Again")
            }
        } catch (error) {
            console.log(error)
        }
       }else{
        toast.error("Please Login Again")
        navigate("/login")
       }
       
    }

    useEffect(()=>{
        fetchTransactions()
    },[])

    console.log(transactions)



    return (
        <div className='user-transaction-history-parent'>
            <div className="user-transaction-history-heading">
                <div>
                    <h1>Transaction history</h1>
                    <p>Gain insights and Track Your Transactions Over Time</p>
                </div>
                {transactions?.length>0?<div>
                <Form.Select aria-label="Default select example" value={''}>
                           <option value="" disabled>Select card</option>
                            <option value="1">DEBIT</option>
                            <option value="2">CREDIT</option>

                        </Form.Select>
                </div>:""}
            </div>
           
         
         
           {transactions?.length>0?<div className="user-page-transaction-table head-user-trans"> 
            <p>Name</p>
            <p>Date</p>
            <p>CARD</p>
            <p>Transaction Type</p>
            <p>Amount</p>
            <p>Export</p>
         </div>:<div className='text-center'>
            <p> Oops! Looks like you haven't made any transactions yet.</p>
            <button className='mt-3' style={{backgroundColor:'blueviolet',padding:'8px',border:'1px solid white',color:'white'}}>  Start Your First Transaction</button>
            </div>}
         {transactions?.length>0?transactions?.map((a,index)=>(
             <div key={index} className="user-page-transaction-table" style={{marginTop:'-20px'}}>
                 <p>{a?.to?a.to:a.from}</p>
                 <p>{a?.date}</p>
                 <p>{a?.card}</p>
                 <p>{a?.transactionType}</p>
                 
                 <p>₹{a?.amount}</p>
                 <button onClick={()=>generateStyledTransactionPDF(a)}>Export</button>
                 </div>
            )):""
            }
        
           
        
           
        </div>
    )
}

export default HomeRightTransactionHistory
