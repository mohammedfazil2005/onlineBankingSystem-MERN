import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const StaffDepositMoney = () => {
    return (
        <div className='login-parent'>
            <div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <h1 style={{ fontSize: "24px" }}>Withdraw</h1>
                <p style={{fontSize:'15px'}}>Withdraw money securely from the user's account</p>
                <>
                    <FloatingLabel controlId="accountNumber" label="Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="Enter account number" className="cursor-pointer" />
                    </FloatingLabel>

                    <FloatingLabel controlId="depositAmount" label="Enter Withdraw Amount" className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            className="cursor-pointer"
                            min="1"
                        />
                    </FloatingLabel>
                </>
                <button>Next</button>
            </div>
        </div>
    )
}

export default StaffDepositMoney
