import React, { useEffect, useState } from 'react'
import './HomeRightLoans.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { loanTypes } from '../../../randomdata/data'
const HomeRightLoans = () => {
    const [interestRate,setInterestRate]=useState('')
    const [EMIamount,setEMIamount]=useState(0)
    const [loanData,setLoanData]=useState({
        card:"debit",
        loanType:"",
        loanAmount:0,
        loanDuration:"",
        interestRate:"",
        EMIamount:EMIamount,
    })
    

    useEffect(()=>{
        let interest=(loanData.loanAmount*loanData.interestRate*loanData.loanDuration)/100
        console.log(Number(loanData.loanAmount)+interest)
    },[loanData])

    // console.log(loanData)
    

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
                        <h6>Select Card</h6>
                        <p>Choose the card you want to apply from.</p>
                    </div>
                    <div>
                        <Form.Select aria-label="Select card">
                            <option disabled selected>Select Card</option>
                            <option value="debit">Debit Card</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Select Loan Type</h6>
                        <p>Select the type of loan you want to apply for.</p>
                    </div>
                    <div>
                        <Form.Select aria-label="Default select example" defaultValue={''} onChange={(e)=>{
                         
                            
                            const loantype=loanTypes.find((a)=>a.value==e.target.value)
                            if(loantype){
                                setInterestRate(loantype.interestRate)
                                setLoanData({...loanData,interestRate:loantype.interestRate,loanType:loantype.value})
                            }
                        }} >
                        <option value="" disabled>Select Loan Type</option>
                            {loanTypes.map((a,key)=>(
                                <option key={key} value={a.value}>{a.label}</option>
                            ))}

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
                            <Form.Control onChange={(e)=>setLoanData({...loanData,loanAmount:e.target.value})} type="number" placeholder="ex:jhon@gmail.com" className="cursor-pointer" required style={{ width: '100%' }} />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Loan Duration</h6>
                        <p>Please select a loan duration: 12 months, 24 months,<br /> 5 years, or 10 years.</p>
                    </div>
                    <div>
                        <Form.Select defaultValue={''} aria-label="Default select example" onChange={(e)=>setLoanData({...loanData,loanDuration:e.target.value})}>
                            <option disabled value="">Select Duration</option>
                            <option value="1">1 year</option>
                            <option value="2">2 years</option>
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>

                        </Form.Select>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Interest Rate (%)</h6>
                        <p>interest rate for this loan is set by the bank.</p>
                    </div>
                    <div>
                        <p>{interestRate?`${interestRate}%`:'Please select a loantype'}</p>
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
