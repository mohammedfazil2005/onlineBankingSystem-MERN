import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/TokenContext'
import toast from 'react-hot-toast'
import { onLoginOTP } from '../../services/allAPI'

const OTP = () => {
    const {email,setRole} = useContext(AuthContext)
    const [loading,setLoading]=useState(false)

    const [OTP,setOTP]=useState("")
    const navigate=useNavigate()

    const onOTPsent=async()=>{
        if(OTP){
            const payload={
                email:email,
                OTP:OTP
            }
            try {
                const serverResponce=await onLoginOTP(payload)
                if(serverResponce.status==200){
                    setLoading(true)
                    sessionStorage.setItem("token",serverResponce.data.token)
                    sessionStorage.setItem("role",serverResponce.data.role)
                    sessionStorage.setItem("name",serverResponce.data.name)
                    setTimeout(() => {
                        toast.success(
                            "You're logged in! Ready to explore your dashboard.",
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
                          setRole(serverResponce.data.role)
                          navigate('/dashboard')
                          setLoading(false)
                    }, 5000);



                }else{
                    toast.error("Incorrect OTP")
                }
            } catch (error) {
                toast.error("Please try again!")
            }


        }
    }







    useEffect(()=>{
        if(email==""){
            toast.error("Please try again!")
            navigate("/login")
        }
    },[email])
    return (
        <>
        {loading?<div className='loader-div'>
        <img src="https://assets-v2.lottiefiles.com/a/b90ff028-1177-11ee-81af-97de0bdd79c1/3mdk9wAzDF.gif" alt="" />
      </div>:
        <div className='login-parent'>
            <div className="login-child">
                <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
                <p style={{color:'grey'}} >Enter the OTP sent to your email address</p>
                <FloatingLabel controlId="otp" label="OTP" className="mb-3">
                    <Form.Control onChange={(e)=>setOTP(e.target.value)} type="text" placeholder="ex: Rosh" className="cursor-pointer" maxLength={4} />
                </FloatingLabel>
                <button onClick={onOTPsent}>Submit</button>
            </div>
        </div>
        }
        </>
    )
}

export default OTP
