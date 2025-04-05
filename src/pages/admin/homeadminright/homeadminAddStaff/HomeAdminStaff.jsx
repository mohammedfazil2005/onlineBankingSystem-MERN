import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { datas, staffData } from '../../../randomdata/data'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './HomeAdminStaff.css'



const HomeAdminStaff = () => {
      const [previewImage, setPreviewImage] = useState('')
      const [profileImageError, setProfileImageError] = useState(false)

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

         const [loading, setLoading] = useState(false)
        
          const [valid, setValid] = useState({
            email: false,
            password: false,
            DOB: false,
        
          })

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
    <div className='login-parent login-parent-staff'>
      <div className="login-child">
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

                  


                  {valid.DOB ? <p style={{ marginTop: '-15px', color: 'red', fontWeight: "300" }}>Enter a valid age!</p> : ""}
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
                    const selectedData = datas.find((a) => a['value'] == e.target.value)
                    if (selectedData) {
                      setUserData({ ...userData, state: selectedData.state, postalCode: selectedData.pincode })
                    }
                  }}

                >
                  <option disabled selected>Select Staff Role</option>
                  {staffData.map((a) => (
                    <option value={a.value} key={a.label}>{a.label}</option>
                  ))}
                </Form.Select>


             
              </div>

              <div>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control type="email" name='email' placeholder="Enter your email" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
              </FloatingLabel>

              <FloatingLabel controlId="password" label="Enter 4 Digit password" className="mb-3">
                    <Form.Control type="text" name='password' maxLength={4} placeholder="Enter your 4 Digit password" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
                  </FloatingLabel>
              </div>



              
        
             
              
             
           <button>Add</button>
      </div>
    </div>
  )
}

export default HomeAdminStaff
