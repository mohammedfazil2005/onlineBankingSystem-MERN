import React from 'react'
import './HomeRightLoans.css'
import { FloatingLabel, Form } from 'react-bootstrap'
const HomeRightLoans = () => {
    return (
        <div className='home-user-payment-parent'>
            <div className="home-user-payment-heading">
                <h1>Loan Application</h1>
                <p>Please provide any specific details or notes related to your loan application.</p>
            </div>
            <div className="home-user-transfer-details">
                <div className="transfer-details-heading">
                    <h5>Transfer Details</h5>
                    <p>Enter the details of the recipent</p>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Select Loan Type</h6>
                        <p>Select the type of loan you want to apply for.</p>
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
                        <h6>Loan Amount</h6>
                        <p>Please specify the loan amount you wish to <br /> apply for (ranging from ₹50,000 to ₹500,000).</p>
                    </div>
                    <div>
                        <FloatingLabel controlId="amount" label="Loan Amount" className="mb-3">
                            <Form.Control type="text" placeholder="ex:jhon@gmail.com" className="cursor-pointer" required style={{ width: '100%' }} />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                    <h6>Loan Duration</h6>
                    <p>Please select a loan duration: 12 months, 24 months,<br /> 5 years, or 10 years.</p>
                    </div>
                    <div>
                    <Form.Select aria-label="Default select example">
                            <option>Select Duration</option>
                            <option value="1">12 months</option>
                            <option value="2">24 months</option>
                            <option value="">5 years</option>
                            <option value="">10 years</option>

                        </Form.Select>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                    <h6>Interest Rate (%)</h6>
                    <p>interest rate for this loan is set by the bank.</p>
                    </div>
                    <div>
                    <p>15%</p>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                    <h6>EMI Amount </h6>
                    <p>Your next EMI is scheduled as per the bank's loan repayment plan.</p>
                    </div>
                    <div>
                    <p>3000/month</p>
                    </div>
                </div>
                <button>Request</button>
            </div>

        </div>
    )
}

export default HomeRightLoans
