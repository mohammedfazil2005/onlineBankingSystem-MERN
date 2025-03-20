import { TextField } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { data, Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'



const Login = () => {

  const [login, setLogin] = useState("Login")

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    postalCode: "",
    DOB: "",
    phone: "",
    salarySource:"",
    monthlySalary:"",
    email: "",
    password: ""

  })
  console.log(userData)



  const onStateChange = () => {
    if (login == "Login") {
      setLogin('Register')
    } else {
      setLogin("Login")
    }
  }



  const handleSuccess=(responce)=>{
    const token=responce.credential
    const userData=jwtDecode(token)
    console.log(userData)
  }

  const handlError=()=>{
    console.log("Login Failed")
  }










  return (
    <div className='login-parent'>
      <div className="login-child">
        <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
        <h1>{login == "Login" ? "Login" : "Signup"}</h1>
        <p>{login == 'Login' ? "Welcome back! Please enter your details" : "Please enter your details"}</p>
        {login == "Login" ? <>
          <FloatingLabel controlId="firstName" label="Phone Number" className="mb-3">
            <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" />
          </FloatingLabel>

        </>
          :


          //Register //



          <>
            <div>
              <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
                <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} required />
              </FloatingLabel>

              <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
                <Form.Control type="text" placeholder="ex: Mathew" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} required />
              </FloatingLabel>
            </div>
            <div>
              <FloatingLabel controlId="address" label="Address" className="mb-3">
                <Form.Control type="text" placeholder="Enter your specific address" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, address: e.target.value })} required />
              </FloatingLabel>
              <FloatingLabel controlId="state" label="State" className="mb-3">
                <Form.Control type="text" placeholder="ex: Kerala" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, state: e.target.value })} required />
              </FloatingLabel>
            </div>

            <div>


              <FloatingLabel controlId="postalCode" label="Postal Code" className="mb-3">
                <Form.Control type="number" placeholder="ex: 1101" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, postalCode: e.target.value })} required />
              </FloatingLabel>

              <FloatingLabel controlId="dob" label="Date of Birth" className="mb-3">
                <Form.Control type="date" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, DOB: e.target.value })} required />
              </FloatingLabel>
            </div>

            <div>
              <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
                <Form.Control type="number" maxLength={10} placeholder="Enter your 10-digit number" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} required />
              </FloatingLabel>
              <Form.Select aria-label="Default select example" style={{height:'60px'}} onChange={(e)=>setUserData({...userData,salarySource:e.target.value})}>
                <option>Select Salary Source</option>
                <option value="1">Monthly Salary</option>
                <option value="2">Freelancing Income</option>
                <option value="3">Business Income</option>
                <option value="4">Pension</option>
                <option value="5">Rental Income</option>
                <option value="6">Investments & Dividends</option>
                <option value="7">Government Benefits</option>
                <option value="8">Other</option>

              </Form.Select>
            </div>
            <FloatingLabel controlId="Salary Amount (₹)" label="Monthly Income Amount (₹)" className="mb-3">
              <Form.Control type="number" placeholder="Enter your email" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, monthlySalary: e.target.value })} required />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Enter your email" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
            </FloatingLabel>

            <FloatingLabel controlId="password" label="Enter your 4 Digit password" className="mb-3">
              <Form.Control type="number" placeholder="Enter your 4 Digit password" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, password: e.target.value })} required />
            </FloatingLabel>

            <FloatingLabel controlId="confirmPassword" label="Confirm Password" className="mb-3">
              <Form.Control type="number" placeholder="Enter password again" className="cursor-pointer" />
            </FloatingLabel>
          </>


        }
        <h6 onClick={onStateChange}>{login == "Login" ? "Dosen't have an account?" : "Already have an account?"}</h6>
       {login=="Login"? <button>Login</button>:<button>Signup</button>}
        <GoogleLogin onSuccess={handleSuccess} onError={handlError}/>
        

      </div>
    </div>
  )
}

export default Login
