import React, { useEffect, useState } from 'react'
import './HomeAdminCreditCardManage.css'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { onFetchApprovedCreditcards } from '../../../../services/allAPI'

const HomeAdminCreditCardManage = () => {

    const navigate=useNavigate()

    const [creditcards,setCreditcards]=useState([])

    const fetchCreditCards=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            const header={
                'Authorization':`Bearer ${token}`
            }
            try {
                const serverResponce=await onFetchApprovedCreditcards(header)
                if(serverResponce.status==200){
                    setCreditcards(serverResponce.data)
                }
            } catch (error) {
                console.log(error)
            }
        }else{
            navigate('/login')
            alert("Please login again!")
        }
    }

    
    
    console.log(creditcards)

    useEffect(()=>{
        fetchCreditCards()
    },[])

    
    return (
        <div className='home-admin-credit-manage-parent'>
            <div className="heading-dashboard">
                <h1>All User Credit Cards</h1>
                <p>Review and manage all credit cards assigned to users within the banking system.</p>
            </div>
            <div className='me-3'>
             
                <Form.Select aria-label="Default select example" value={''} style={{width:'180px'}} className='float-end'>
                            <option value="" disabled>Select card type</option>
                            <option value="1">Silver</option>
                            <option value="2">Gold</option>

                        </Form.Select>
            </div>
            <div className="user-card-div-main">
                {creditcards?.length>0?creditcards.map((a,key)=>(
                    <div key={key} className='main-card' style={{ background: 'url(https://img.freepik.com/free-vector/premium-round-golden-frame-red-background-design_1017-54880.jpg)' }}>
                    <div className='main-card-heading'>
                        <h5>Bank Ai</h5>
                        <p>{a?.cardType}</p>
                    </div>
                    <div className='main-card-user-details'>
                        <h4>{a?.cardholderName}</h4>
                        <p>{a?.cardExpiryDate}</p>
                    </div>
                    <div className='main-card-card-details'>
                        <p><span>****</span><span>****</span> <span>****</span></p>
                       <button className='btn text-light'>view</button>
                    </div>
                   
                </div>
                )):""}
                


               

                
                


                

                
            </div>
        </div>
    )
}

export default HomeAdminCreditCardManage
