import React, { useEffect, useState } from 'react'
import './HomeRightLoans.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { loanTypes } from '../../../randomdata/data'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onLoanApplication } from '../../../../services/allAPI'
const HomeRightLoans = () => {
    const [interestRate,setInterestRate]=useState('')
    const [loanData,setLoanData]=useState({
        card:"debit",
        loanType:"",
        loanAmount:0,
        loanDuration:"",
        interestRate:"",
        repayingAmount:0,
        EMIamount:0,
    })

    const navigate=useNavigate()

    const onLoanRequest=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            if(loanData.loanType&&loanData.loanAmount&&loanData.loanDuration&&loanData.interestRate){
                if(loanData.loanAmount>=50000&&loanData.loanAmount<=500000){

                    const header={
                        'Authorization':`Bearer ${token}`
                    }
                    

                    try {
                        const serverResponce=await onLoanApplication(loanData,header)
                        if(serverResponce.status==200){
                            toast.success(
                                "Loan request successfully submitted! You can view the details in 'My Loans'.",
                                {
                                  style: {
                                    border: '2px solid blueviolet',
                                    padding: '16px',
                                    color: 'blueviolet',
                                  },
                                  iconTheme: {
                                    primary: 'blueviolet',
                                    secondary: 'white',
                                  },
                                  duration: 6000,
                                }
                              );
                              ClearFunction()
                        }else if(serverResponce.status==400){
                            toast.error(
                                "You have already two active loans. You can't apply for more until they close.",
                                {
                                  style: {
                                    border: '1px solid red',
                                    padding: '16px',
                                    color: 'red',
                                  },
                                  iconTheme: {
                                    primary: 'red',
                                    secondary: 'white',
                                  },
                                }
                              );
                        }else if(serverResponce.status==409){
                            toast.error(
                                "You have already requested two loans. You cannot request more at this time",
                                {
                                  style: {
                                    border: '1px solid red',
                                    padding: '16px',
                                    color: 'red',
                                  },
                                  iconTheme: {
                                    primary: 'red',
                                    secondary: 'white',
                                  },
                                }
                              );
                        }else{
                            toast.error("Internal Error")
                        }
                    } catch (error) {
                        console.log(error)
                        toast.error("Please try again after a while!")
                    }
                    

                }else{
                    toast.error(
                        "Please enter a loan amount between ₹50,000 and ₹5,00,000.",
                        {
                          style: {
                            border: '1px solid red',
                            padding: '16px',
                            color: 'red',
                          },
                          iconTheme: {
                            primary: 'red',
                            secondary: 'white',
                          },
                        }
                      );
                }
            }else{
                toast.error("Please Select the fields!")
            }
        }else{
            toast.error("Please Login Again!")
            navigate('/login')
        }
    }


    const ClearFunction=()=>{
        setLoanData({...loanData,
            loanAmount:"",
            loanType:"",
            interestRate:"",
            loanDuration:"",
            EMIamount:0
        })
    }

    
    

    useEffect(()=>{
        if(loanData.loanAmount&&loanData.interestRate&&loanData.loanDuration){
            let interest=(loanData.loanAmount*loanData.interestRate*loanData.loanDuration)/100
            let totalLoanAMOUNT=Number(loanData.loanAmount)+interest
            let totalMonth=loanData.loanDuration*12
            let EMIperMonth=totalLoanAMOUNT/totalMonth

        setLoanData({ ...loanData, EMIamount:Math.ceil(EMIperMonth)});
        }
    },[loanData.loanAmount,loanData.interestRate,loanData.loanDuration])

    

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
                            <Form.Control value={loanData.loanAmount} onChange={(e)=>setLoanData({...loanData,loanAmount:e.target.value})} type="number" placeholder="ex:jhon@gmail.com" className="cursor-pointer" required style={{ width: '100%' }} />
                        </FloatingLabel>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>Loan Duration</h6>
                        <p>Please select a loan duration: 12 months, 24 months,<br /> 5 years, or 10 years.</p>
                    </div>
                    <div>
                        <Form.Select  defaultValue={loanData.loanDuration} aria-label="Default select example" onChange={(e)=>setLoanData({...loanData,loanDuration:e.target.value})}>
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
                        <p>{loanData.interestRate?`${loanData.interestRate}%`:'Please select a loantype'}</p>
                    </div>
                </div>
                <div className="transfer-details-input-div">
                    <div>
                        <h6>EMI Amount </h6>
                        <p>Your next EMI is scheduled as per the bank's loan repayment plan.</p>
                    </div>
                    <div>
                        <p>{loanData.EMIamount}/month</p>
                    </div>
                </div>
                <button onClick={onLoanRequest}>Request</button>
            </div>

        </div>
    )
}

export default HomeRightLoans
