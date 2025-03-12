import React from 'react'
import './HomeRightPayment.css'
import { FloatingLabel, Form } from 'react-bootstrap'

const HomeRightPayment = () => {
    return (
        <div className='home-user-payment-parent'>
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
                    <p>Recipient's Email Address</p>
                    </div>
                    <div>
                    <FloatingLabel controlId="state" label="Email Address" className="mb-3">
                        <Form.Control type="text" placeholder="ex:jhon@gmail.com" className="cursor-pointer" required style={{width:'100%'}}/>
                    </FloatingLabel>
                    </div>
                </div>
                <div className="bank-account-details-inputs">
                <div>
                    <p>Recipient's Bank Account Number</p>
                    </div>
                    <div>
                    <FloatingLabel controlId="state" label="Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="ex: 123 123 123" className="cursor-pointer" required />
                    </FloatingLabel>
                    </div>

                </div>
                <div className="bank-account-details-inputs">
                    <div>
                    <p>Amount</p>
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
        </div>
    )
}

export default HomeRightPayment
