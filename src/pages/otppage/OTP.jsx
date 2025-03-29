import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OTP = () => {
    return (
        <div className='login-parent'>
            <div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <p style={{color:'grey'}}>Enter the OTP sent to your email address</p>
                <FloatingLabel controlId="otp" label="OTP" className="mb-3">
                    <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" maxLength={4} />
                </FloatingLabel>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default OTP
