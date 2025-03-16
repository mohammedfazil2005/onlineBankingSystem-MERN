import React from 'react'
import './Deposit.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Deposit = () => {
    return (
        <div className='login-parent'>
            <div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <h1 style={{ fontSize: "24px" }}>Deposit Money</h1>
                <p>Deposit money safely and instantly</p>
                <>
                    <FloatingLabel controlId="accountNumber" label="Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="Enter account number" className="cursor-pointer" />
                    </FloatingLabel>

                    <FloatingLabel controlId="pinCode" label="Enter your 4-digit PIN" className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="****"
                            className="cursor-pointer"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={4}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="depositAmount" label="Enter Deposit Amount" className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            className="cursor-pointer"
                            min="1"
                        />
                    </FloatingLabel>
                </>
                <button>Deposit</button>
            </div>
        </div>
    )
}

export default Deposit
