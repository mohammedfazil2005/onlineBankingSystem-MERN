import React, { useEffect, useState } from 'react'
import './HomeRightPayment.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import OTP from '../../../otppage/OTP'
import { onFetchAllCards, onTransaction, onTransactionOTP } from '../../../../services/allAPI'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const HomeRightPayment = () => {
    const [inOTP,setInOTP]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    const [cards,setCards]=useState([])

    const [OTP,setOTP]=useState("")

    const navigate=useNavigate()
    
    const [transferDetails,setTransferDetails]=useState({
        message:"",
        accno:"",
        amount:"",
        confirmaccno:""
    })

    const fetchCards=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
          const header={
            'Authorization':`Bearer ${token}`
          }
          try {
            const serverResponce=await onFetchAllCards(header)
            if(serverResponce.status==200){
              setCards(serverResponce.data.debitCard)
             
            }else{
              toast.error("Please Login Again")
              navigate('/login')
            }
          } catch (error) {
            console.log(error)
          }
    
        }else{
          toast.error("Please Login Again!")
          navigate("/login")
        }
      }

      const onTransactionBtnClick=async()=>{
        if(transferDetails.accno&&transferDetails.amount){
            if(transferDetails.accno==transferDetails.confirmaccno){

                const token=sessionStorage.getItem("token")

                if(token){
                    const payload={
                        recipentAccountNumber:transferDetails.accno,
                        cardType:'Debit',
                        amount:transferDetails.amount,
                        message:transferDetails.message?transferDetails.message:""
                    }
                    const header={
                        'Authorization':`Bearer ${token}`
                    }
                    try {
                        setIsLoading(true)
                        const serverResponce=await onTransaction(payload,header)
                        console.log(serverResponce)
                        if(serverResponce.status==200){
                            toast.success(
                                "OTP sent successfully! Please check your email or phone to proceed.",
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
                            setIsLoading(false)
                            setInOTP(true)

                        }else{
                         setTimeout(()=>{
                            setIsLoading(false)
                            toast.error("Account not found")
                         },3000)
                        }
                        
                    } catch (error) {
                        console.log(error)
                        toast.error("Please try again after a while!")
                    }

                }else{
                    toast.error("Please Login again!")
                    navigate('/login')
                }

            }else{
                toast.error("Account number mismatch. Kindly double-check the details and proceed again.")
            }

        }else{
            toast.error("Please enter the Account Number and Amount to proceed with the transaction.")
        }
      }

      const onOTPbtnClick=async()=>{
        const token=sessionStorage.getItem("token")
        if(OTP.length==4){
           
            const header={
                'Authorization':`Bearer ${token}`
            }
            try {
                
                const serverResponce=await onTransactionOTP(OTP,header)
                setIsLoading(true)
                setInOTP(false)
                if(serverResponce.status==200){
                    setTimeout(()=>{
                        toast.success("Transaction Completed")
                        setIsLoading(false)
                        setInOTP(false)
                    },3000)
                   
                }else if(serverResponce.status==400){
               
                    setTimeout(()=>{
                        setIsLoading(false)
                        setInOTP(true)
                        toast.error("Invalid OTP. Please try again.")
                       
                    },3000)
                   
                }else{
                    setTimeout(()=>{
                        toast.error("Please try again")
                        setIsLoading(false)
                        setInOTP(false)
                    },3000)
                    
                }
              
            } catch (error) {
                console.log(error)
                setTimeout(()=>{
                    toast.error("Please try again")
                    setIsLoading(false)
                    setInOTP(false)
                },3000)
            }

        }else{
            toast.error("Kindly enter the 4-digit OTP to proceed with the money transfer.")
        }
      }



      



    console.log(transferDetails)



      useEffect(()=>{
        fetchCards()
      },[])

      console.log(cards)


    return (
        <>
        {inOTP?<div className='login-parent'><div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <p style={{color:'grey'}} >Enter the OTP sent to your email address</p>
                <FloatingLabel controlId="otp" label="OTP" className="mb-3">
                    <Form.Control onChange={(e)=>setOTP(e.target.value)} type="text" placeholder="ex: Rosh" className="cursor-pointer" maxLength={4} />
                </FloatingLabel>
                <button onClick={onOTPbtnClick}>Submit</button>
            </div></div>:isLoading?<div className='loader-div' style={{marginTop:'-80px'}}>
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
                            <option>Debit card</option>
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
                                style={{ height: '100px', width: '100%' }} onChange={(e)=>setTransferDetails({...transferDetails,message:e.target.value})}
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
                        <Form.Control onChange={(e)=>setTransferDetails({...transferDetails,accno:e.target.value})} max={12} type='Number' placeholder="ex: 123 123 123" className="cursor-pointer" required />
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
                        <Form.Control onChange={(e)=>setTransferDetails({...transferDetails,confirmaccno:e.target.value})} max={12} type='Number' placeholder="ex: 123 123 123" className="cursor-pointer" required />
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
                        <Form.Control onChange={(e)=>setTransferDetails({...transferDetails,amount:e.target.value})} max={12} type='Number' placeholder="ex: Amount" className="cursor-pointer" required />
                    </FloatingLabel>
                    </div>

                </div>
                <div className='transfer-btn-div'>
                <button onClick={onTransactionBtnClick}>Transfer Fund</button>
                </div>
            </div>
        </div>}
       
        </>
    )
}

export default HomeRightPayment
