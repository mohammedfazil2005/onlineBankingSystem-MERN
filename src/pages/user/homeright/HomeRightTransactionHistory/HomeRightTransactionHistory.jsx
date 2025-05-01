import React, { useContext, useEffect, useState } from 'react'
import './HomeRightTransactionHistory.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { onFetchAllTransactions } from '../../../../services/allAPI';
import { generateStyledTransactionPDF } from '../../../../services/TransactionPDF';
import { AuthContext } from '../../../../contexts/TokenContext';

const HomeRightTransactionHistory = () => {
    const [transactions,setTransactions]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const navigate=useNavigate()
    const {payment}=useContext(AuthContext)

        const [filteredData,setFilteredData]=useState([])
        const [selectType,setSelectType]=useState("")

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

    const onBackward=()=>{
        if(currentPage>1){
          setCurrentPage(currentPage-1)
        }
      }
    
      const onForward=()=>{
        if(currentPage<totalpages){
          setCurrentPage(currentPage+1)
        }
      }

      let notificationPerPage=8
    let totalpages=Math.ceil(transactions?.length/notificationPerPage)

  let lastIndex=currentPage* notificationPerPage
  let firstIndexIndex=lastIndex-notificationPerPage

  let slicedData=transactions?.slice(firstIndexIndex,lastIndex)

    useEffect(()=>{
        fetchTransactions()
    },[payment])

    
        useEffect(()=>{
            if(selectType==""){
                setFilteredData(slicedData)
            }else{
                let filteredData=transactions?.filter((a)=>a['transactionType'].toLowerCase()==selectType)
                setFilteredData(filteredData)
            }
        },[selectType,transactions])
    




    return (
        <div className='user-transaction-history-parent'>
            <div className="user-transaction-history-heading">
                <div>
                    <h1>Transaction history</h1>
                    <p>Gain insights and Track Your Transactions Over Time</p>
                </div>
                {transactions?.length>0?<div>
                <Form.Select aria-label="Default select example" value={selectType} onChange={(e)=>setSelectType(e.target.value)}>
                           <option value="">All</option>
                            <option value="debited">DEBIT</option>
                            <option value="credited">CREDIT</option>

                        </Form.Select>
                </div>:""}
            </div>
           
         
         
           {filteredData?.length>0?<div className="user-page-transaction-table head-user-trans"> 
            <p>to</p>
            <p>Date</p>
            <p>CARD</p>
            <p>Transaction Type</p>
            <p>Amount</p>
            <p>Export</p>
         </div>:<div className='text-center'>
            <p> Oops! Looks like you haven't made any transactions yet.</p>
            <button className='mt-3' style={{backgroundColor:'blueviolet',padding:'8px',border:'1px solid white',color:'white'}}>  Start Your First Transaction</button>
            </div>}
         {filteredData?.length>0?filteredData?.map((a,index)=>(
            <>
             <div key={index} className="user-page-transaction-table" style={{marginTop:'-10px'}}>
                 <p>{a?.to?a.to:a.from}</p>
                 <p>{a?.date}</p>
                 <p>{a?.card}</p>
                 <p>{a?.transactionType}</p>
                 
                 <p>₹{a?.amount}</p>
                 <button onClick={()=>generateStyledTransactionPDF(a)}>Export</button>
                 </div>
                 <hr style={{marginTop:'-10px'}}/>
                 </>
            )):""
            }

<div className='d-flex align-items-center justify-content-center'>
                <button className='btn' onClick={onBackward}><i class="fa-solid fa-arrow-left"></i></button>
                <p>{currentPage} of {totalpages}</p>
                <button className='btn' onClick={onForward}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        
           
        
           
        </div>
    )
}

export default HomeRightTransactionHistory
