import React, { useState } from 'react'
import './HomeRightPayment.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import OTP from '../../../otppage/OTP'

const HomeRightPayment = () => {
    const [inOTP,setInOTP]=useState(false)
    const [isLoading,setIsLoading]=useState(false)



    return (
        <>
        {inOTP?<OTP/>:isLoading?<div className='loader-div' style={{marginTop:'-80px'}}>
        <img src="https://assets-v2.lottiefiles.com/a/b90ff028-1177-11ee-81af-97de0bdd79c1/3mdk9wAzDF.gif" alt="" />
      </div> : <div className='home-user-payment-parent'>
            <div className="home-user-payment-heading">
                <h1>Payment Transfer</h1>
                <p>Please provide any specific details or notes related to the payment transfer</p>
            </div>
            <div className="home-user-transfer-details">
                <div className="transfer-details-heading">
                    <h5>Transfer Details</h5>
                    <p>Enter the details of the recipent</p>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Select Source Bank</h6>
                        <p>Select the bank account you want to transfer funds from</p>
                    </div>
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option>Select card</option>
                            <option value="1">DEBIT</option>
                            <option value="2">CREDIT</option>
                            
                        </Form.Select>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Transfer Note(Optional)</h6>
                        <p>Please provide any addtional information or <br />instructions related to the transfer</p>
                    </div>
                    <div>
                        <FloatingLabel controlId="floatingTextarea2" label="Transfer Note">
                            <Form.Control
                                as="textarea"
                                placeholder="Transfer Note"
                                style={{ height: '100px', width: '100%' }}
                            />
                        </FloatingLabel>
                    </div>
                </div>
            </div>
            <div className="home-bank-account-details">
                <div className="bank-account-details-heading">
                    <h5>Bank account details</h5>
                    <p>Enter the bank account details of the recipent</p>
                </div>
                <div className="bank-account-details-inputs">
                <div>
                    <h6>Recipient's Bank Account Number</h6>
                    <p>Enter the recipient’s bank account number to transfer funds securely</p>
                    </div>
                    <div>
                    <FloatingLabel controlId="accno" label="Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="ex: 123 123 123" className="cursor-pointer" required />
                    </FloatingLabel>
                    </div>

                </div>
                <div className="bank-account-details-inputs">
                <div>
                    <h6>Confirm Recipient's Bank Account Number</h6>
                    <p>Enter the account number again to verify the recipient’s bank details.</p>
                    
                    </div>
                    <div>
                    <FloatingLabel controlId="accno" label="Confirm Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="ex: 123 123 123" className="cursor-pointer" required />
                    </FloatingLabel>
                    </div>

                </div>
                <div className="bank-account-details-inputs">
                    <div>
                    <h6>Amount</h6>
                    <p>Enter the amount to transfer. Minimum transfer amount is ₹100.</p>
                    </div>
                    <div>
                    <FloatingLabel controlId="state" label="Amount" className="mb-3">
                        <Form.Control type="text" placeholder="ex: Amount" className="cursor-pointer" required />
                    </FloatingLabel>
                    </div>

                </div>
                <div className='transfer-btn-div'>
                <button>Transfer Fund</button>
                </div>
            </div>
        </div>}
       
        </>
    )
}

export default HomeRightPayment
