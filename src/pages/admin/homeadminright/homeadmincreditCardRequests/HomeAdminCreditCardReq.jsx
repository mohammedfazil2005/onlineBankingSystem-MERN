import React, { useEffect, useState } from 'react'
import './HomeAdminCreditCardReq.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { onFetchCreditCardRequests } from '../../../../services/allAPI'

const HomeAdminCreditCardReq = () => {

    const navigate=useNavigate()

    const [creditCardRequests,setCreditCardRequests]=useState([])

    const fetchCreditCardRequests=async()=>{
        const token=sessionStorage.getItem('token')
        if(token){

            const header={
                'Authorization':`Bearer ${token}`
            }

            try {
                const serverResponce=await onFetchCreditCardRequests(header)
                if(serverResponce.status==200){
                    setCreditCardRequests(serverResponce.data.allrequests)
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

    console.log(creditCardRequests)


    return (
        <div className='home-admin-credit-card-req-parent'>
            <div className="heading-dashboard">
                <h1>Credit Card Requests</h1>
                <p>Review and manage all credit card requests submitted by users.</p>
            </div>
            <div className='me-3'>
             
                <Form.Select aria-label="Default select example" style={{width:'120px'}} className='float-end'>
                            <option value="1">Silver</option>
                            <option value="2">Gold</option>

                        </Form.Select>
            </div>
            {creditCardRequests?.length>0?<div className="home-admin-credit-req-table heading-req-table">
                <p>FULL NAME</p>
                <p>Email </p>
                <p> Card Type</p>
                <p>Profile</p>
                <p>...</p>
            </div>:<div>
            <p className='text-center'>No credit card requests are available at the moment.!!</p>
                </div>}
            {creditCardRequests?.length>0?creditCardRequests?.map((a,key)=>(
                 <div key={key} className="home-admin-credit-req-table heading-req-content">
                 <div>
                 <img src={`http://localhost:3000/uploads/${a.profileimg}`} alt="" />   
                 <p>{a.name}</p>
                 </div>
                 <p>{a?.email}</p>
                 <h6>{a?.cardType}</h6>
               <Link>View Profile</Link>
                 <div>
                  <button>Approve</button>
                  <button>Reject</button>
                 </div>
              </div>
            )):""}
           

           



         

           
        </div>
    )
}

export default HomeAdminCreditCardReq
