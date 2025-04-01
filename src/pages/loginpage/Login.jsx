import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Login.css'
import { FloatingLabel, Form } from 'react-bootstrap'
import { data, Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { datas } from '../randomdata/data'
import toast from 'react-hot-toast'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const Login = () => {

  const [login, setLogin] = useState("Login")
  const [previewImage, setPreviewImage] = useState('')
  const [profileImageError, setProfileImageError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [valid, setValid] = useState({
    email: false,
    password: false,
    DOB: false,

  })

  const [userData, setUserData] = useState({
    profileimg: "",
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    postalCode: "",
    DOB: "",
    phone: "",
    salarySource: "",
    monthlySalary: "",
    email: "",
    password: ""


  })

  const navigate = useNavigate()





  const onStateChange = () => {
    if (login == "Login") {
      setLogin('Register')
    } else {
      setLogin("Login")
    }
  }



  const handleSuccess = (responce) => {
    const token = responce.credential
    const userData = jwtDecode(token)
    console.log(userData)
  }

  const handlError = () => {
    console.log("Login Failed")
  }

  const onbtnClick = () => {
    if (login == "Register") {
      if (userData.firstName || userData.lastName || userData.DOB || userData.address || userData.email || userData.monthlySalary || userData.password || userData.phone || userData.postalCode || userData.profileimg || userData.salarySource || userData.state) {



      } else {
        toast.error('All fields are required!', {
          style: {
            border: '1px solid red',
            padding: '16px',
            color: 'red',
          },
          iconTheme: {
            primary: 'red',
            secondary: 'white',
          },
        });
      }

    }
  }


  const onTextChange = (e) => {
    if (e.name == "email") {
      let regexTest = e.value.match(/^[a-z]*@?@gmail.com+$/)
      if (!!regexTest) {
        setUserData({ ...userData, email: e.value })
        setValid({ ...valid, email: false })
      } else {
        setValid({ ...valid, email: true })
      }
    }

    if (e.name == "password") {
      let regexTest = e.value.match(/^[0-9]*$/)
      if (!!regexTest) {
        setUserData({ ...userData, password: e.value })
        setValid({ ...valid, password: false })
      } else {
        setValid({ ...valid, password: true })
      }
    }

  }


  const onDOB = (date) => {
    let currentYear = new Date().getFullYear()
    let userYear = date.year()
    let userDate = date.date()
    let userMonth = date.month()
    let DOB = `${userDate}-${userMonth}-${userYear}`
    console.log(DOB)
    if (currentYear - userYear >= 21) {
      setUserData({ ...userData, DOB: DOB })
      setValid({ ...valid, DOB: false })
    } else {
      setValid({ ...valid, DOB: true })
      
    }
  }

  console.log(userData)




  // setLoading(true)
  // setTimeout(() => {
  //  setLoading(false)
  //  navigate('/otp')
  // }, 3000);



  useEffect(() => {
    if (userData.profileimg) {
      if (userData.profileimg.type == "image/png" || userData.profileimg.type == "image/jpeg" || userData.profileimg.type == "image/jpg") {
        console.log(userData.profileimg)
        setPreviewImage(URL.createObjectURL(userData.profileimg))
        setProfileImageError(false)
      } else {
        setProfileImageError(true)
        setUserData({ ...userData, profileimg: "" })
      }

    }
  }, [userData.profileimg])






  return (
    <>
      {loading ? <div className='loader-div'>
        <img src="https://assets-v2.lottiefiles.com/a/b90ff028-1177-11ee-81af-97de0bdd79c1/3mdk9wAzDF.gif" alt="" />
      </div> : <div className='login-parent'>
        <div className="login-child">
          <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
          <h1>{login == "Login" ? "Login" : "Signup"}</h1>
          <p>{login == 'Login' ? "Welcome back! Please enter your details" : "Please enter your details"}</p>
          {login == "Login" ? <>
            <FloatingLabel controlId="firstName" label="Enter your email" className="mb-3">
              <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" />
            </FloatingLabel>

          </>
            :


            //Register //



            <>
              <div className='login-profile-div mt-4'>
                <img src={previewImage ? previewImage : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" />
                <div className='d-flex flex-column '>
                  <label>

                    <p className='btn' style={{ backgroundColor: 'rgba(137, 43, 226, 0.414)', color: 'white' }}>choose a file</p>
                    <Form.Control type="file" className="cursor-pointer w-50" onChange={(e) => setUserData({ ...userData, profileimg: e.target.files[0] })} required style={{ display: 'none' }} />

                  </label>

                  {profileImageError ? <p style={{ marginTop: '-16px', fontSize: '14px', color: 'red' }}>
                    Only JPEG, PNG, and JPG file  formats <br /> are supported.
                  </p> : <p style={{ marginTop: '-16px', fontSize: '14px', color: 'blueviolet' }}>
                    Only JPEG, PNG, and JPG file  formats <br /> are supported.</p>}
                </div>

              </div>
              <div>

                <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
                  <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} required />
                </FloatingLabel>

                <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
                  <Form.Control type="text" placeholder="ex: Mathew" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} required />
                </FloatingLabel>
              </div>

              <div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="DOB" onChange={onDOB} />
                    </DemoContainer>
                  </LocalizationProvider>


                  {valid.DOB ? <p style={{ marginTop: '-15px', color: 'red', fontWeight: "300" }}>You must be at least 21 years old!</p> : ""}
                </div>

                <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
                  <Form.Control type="number" maxLength={10} placeholder="Enter your 10-digit number" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} required />
                </FloatingLabel>
              </div>
              <div>

                <Form.Select
                  aria-label="Default select example"
                  style={{ height: '60px' }}
                  onChange={(e) => {
                    const selectedData = datas.find((a) => a['state'] == e.target.value)
                    if (selectedData) {
                      setUserData({ ...userData, state: selectedData.state, postalCode: selectedData.pincode })
                    }
                  }}

                >
                  <option disabled selected>Select State</option>
                  {datas.map((a) => (
                    <option value={a.state} key={a.pincode}>{a.state}</option>
                  ))}
                </Form.Select>


                <FloatingLabel controlId="postalCode" label="PIN Code" className="mb-3">
                  <Form.Control type="number" placeholder="ex: 1101" readOnly className="cursor-pointer" value={userData.postalCode} required />
                </FloatingLabel>
              </div>



              <div>

                <Form.Select aria-label="Default select example" style={{ height: '60px' }} onChange={(e) => setUserData({ ...userData, salarySource: e.target.value })}>
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

                <FloatingLabel controlId="Salary Amount (₹)" label="Monthly Income Amount (₹)" className="mb-3">
                  <Form.Control type="number" placeholder="Enter your email" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, monthlySalary: e.target.value })} required />
                </FloatingLabel>
              </div>

              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control type="email" name='email' placeholder="Enter your email" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
              </FloatingLabel>
              {valid.email ? <p style={{ marginTop: '-25px', color: 'red', fontWeight: "300" }}>Please enter a valid email address!</p> : ""}
              <div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <FloatingLabel controlId="password" label="Enter your 4 Digit password" className="mb-3">
                    <Form.Control type="text" name='password' maxLength={4} placeholder="Enter your 4 Digit password" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
                  </FloatingLabel>
                  {valid.password ? <p style={{ marginTop: '-35px', color: 'red', fontWeight: "300" }}>Password must be exactly 4 digits!</p> : ""}
                </div>

                <FloatingLabel controlId="confirmPassword" label="Confirm Password" className="mb-3">
                  <Form.Control type="number" placeholder="Enter password again" className="cursor-pointer" />
                </FloatingLabel>
              </div>
            </>


          }
          <h6 onClick={onStateChange}>{login == "Login" ? "Dosen't have an account?" : "Already have an account?"}</h6>
          <button onClick={onbtnClick}>{login == "Login" ? "Login" : "Signup"}</button>
          <GoogleLogin onSuccess={handleSuccess} onError={handlError} />


        </div>
      </div>}
    </>
  )
}

export default Login
