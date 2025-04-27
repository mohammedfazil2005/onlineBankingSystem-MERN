import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { onWithdraw, onWithdrawOTP } from '../../../../services/allAPI'


const StaffDepositMoney = () => {

    const navigate=useNavigate()

    const [carddetails,setCardDetails]=useState({
        accno:"",
        amount:0
    })
    
    const [OTP,setOTP]=useState(false)
    const [loading,setLoading]=useState(false)
    const [OTPNumber,setOTPNumber]=useState("")

    const withdrawBtnClick=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            if(carddetails.accno.length==12){
                if(carddetails.amount>=100&&carddetails.amount<=50000){
                    const header={
                        'Authorization':`Bearer ${token}`
                    }
                    const payload={
                        amount:carddetails.amount
                    }
                    try {
                        setLoading(true)
                        const serverResponce=await onWithdraw(carddetails.accno,payload,header)
                        if(serverResponce.status==200){
                            setTimeout(()=>{
                                toast.success(
                                    "OTP sent successfully! Kindly check your email for the verification code to proceed with the request approval.",
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
                                setLoading(false)
                                setOTP(true)
                            },4000)
                        }else if(serverResponce.status==400){
                            setTimeout(()=>{
                                toast.error("Transaction failed due to insufficient balance. Kindly ensure sufficient funds are available and try again.")
                                setLoading(false)
                            },2000)
                        }else if(serverResponce.status==404){ 
                            setTimeout(()=>{
                                toast.error("Account not found. Kindly ensure the account details are correct and try again.")
                                setLoading(false)
                            },2000)
                        }

                    } catch (error) {
                        toast.error("Please try again after sometime!")
                        console.log(error)
                        setLoading(false)
                    }

                }else{
                    toast.error('The amount should be between ₹100 and ₹50,000. Please enter a valid amount.')
                }

            }else{
                toast.error("Enter your valid 12-digit account number to proceed.")
            }
        }else{
            navigate('login')
            res.status(409).json("Please login again!")
        }
    }

    const withdrawalOTP=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            if(OTPNumber.length==4){
                
                    const header={
                        'Authorization':`Bearer ${token}`
                    }
                    try {
                        setLoading(true)
                        setOTP(false)
                        const serverResponce=await onWithdrawOTP(OTPNumber,header)
                        if(serverResponce.status==200){
                            setTimeout(()=>{
                                toast.success(
                                    "Withdrawal successful! Your transaction has been completed.",
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
                                  setLoading(false)
                            setOTP(false)
                            },4000)
                            
                        }else if(serverResponce.status==400){
                            setTimeout(() => {
                                toast.error('The OTP you entered is invalid. Kindly ensure the code is correct and try again.')
                                setLoading(false)
                                setOTP(true)
                            }, 3000);
                        }else{
                            setTimeout(()=>{
                                toast.error("Please try again after sometime!")
                                setOTP(false)
                                setLoading(false)
                            },3000)
                           
                        }

                    } catch (error) {
                        toast.error("Please try again after sometime!")
                        console.log(error)
                        setLoading(false)
                        setOTP(false)
                    }

            }else{
                toast.error("Please enter the 4-digit OTP to verify your identity and continue the process.")
            }
        }else{
            navigate('login')
            res.status(409).json("Please login again!")
        }
    }


    return (
        <>
        {OTP?<div className='login-parent'><div className="login-child">
                        <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                        <p style={{color:'grey'}} >Enter the OTP sent to your email address</p>
                        <FloatingLabel onChange={(e)=>setOTPNumber(e.target.value)} controlId="otp" label="OTP" className="mb-3">
                            <Form.Control  type="text" placeholder="ex: Rosh" className="cursor-pointer" maxLength={4} />
                        </FloatingLabel>
                        <button onClick={withdrawalOTP}>Submit</button>
                    </div></div>:loading?<div className='loader-div'>
        <img src="https://assets-v2.lottiefiles.com/a/b90ff028-1177-11ee-81af-97de0bdd79c1/3mdk9wAzDF.gif" alt="" />
      </div>:<div className='login-parent'>
            <div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <h1 style={{ fontSize: "24px" }}>Withdraw</h1>
                <p style={{fontSize:'15px'}}>Withdraw money securely from the user's account</p>
                <>
                    <FloatingLabel controlId="accountNumber" label="Account Number" className="mb-3">
                        <Form.Control type="text" placeholder="Enter account number" onChange={(e)=>setCardDetails({...carddetails,accno:e.target.value})} className="cursor-pointer" />
                    </FloatingLabel>

                    <FloatingLabel controlId="depositAmount" label="Enter Withdraw Amount" className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Enter amount"
                            className="cursor-pointer"
                            min="1"
                            onChange={(e)=>setCardDetails({...carddetails,amount:e.target.value})}
                        />
                    </FloatingLabel>
                </>
                <button onClick={withdrawBtnClick}>Next</button>
            </div>
        </div>}
        </>
    )
}

export default StaffDepositMoney
