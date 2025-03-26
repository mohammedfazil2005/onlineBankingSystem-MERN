import React from 'react'
import './HomeRightTransactionHistory.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
const HomeRightTransactionHistory = () => {
    return (
        <div className='user-transaction-history-parent'>
            <div className="user-transaction-history-heading">
                <div>
                    <h1>Transaction history</h1>
                    <p>Gain insights and Track Your Transactions Over Time</p>
                </div>
                <div>
                <Form.Select aria-label="Default select example" value={''}>
                           <option value="" disabled>Select card</option>
                            <option value="1">DEBIT</option>
                            <option value="2">CREDIT</option>

                        </Form.Select>
                </div>
            </div>
           
         <div className="user-page-transaction-table head-user-trans">
         
            <p>Name</p>
            <p>Date</p>
            <p>CARD</p>
            <p>Transaction Type</p>
          
            <p>Amount</p>
            <p>Export</p>
         </div>

         <div className="user-page-transaction-table" style={{marginTop:'-20px'}}>
           
            <p>MohammedFazil</p>
            <p>20/2/2024</p>
            <p>Debit</p>
            <p>Credited</p>
          
            <p>₹460</p>
            <button>Export</button>
         </div>
           
        </div>
    )
}

export default HomeRightTransactionHistory
