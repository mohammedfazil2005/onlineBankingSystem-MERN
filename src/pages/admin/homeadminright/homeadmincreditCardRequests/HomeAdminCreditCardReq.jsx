import React from 'react'
import './HomeAdminCreditCardReq.css'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const HomeAdminCreditCardReq = () => {
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
            <div className="home-admin-credit-req-table heading-req-table">
                <p>FULL NAME</p>
                <p>Email </p>
                <p> Card Type</p>
                <p>Profile</p>
                <p>...</p>
            </div>

            <div className="home-admin-credit-req-table heading-req-content">
               <div>
               <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />   
               <p>Mohammed fazil</p>
               </div>
               <p>mhd@gmail.com</p>
               <h6>Silver</h6>
             <Link>View Profile</Link>
               <div>
                <button>Approve</button>
                <button>Reject</button>
               </div>
            </div>

            <div className="home-admin-credit-req-table heading-req-content">
               <div>
               <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />   
               <p>Mohammed fazil</p>
               </div>
               <p>mhd@gmail.com</p>
               <h6>Silver</h6>
             <Link>View Profile</Link>
               <div>
                <button>Approve</button>
                <button>Reject</button>
               </div>
            </div>



         

           
        </div>
    )
}

export default HomeAdminCreditCardReq
