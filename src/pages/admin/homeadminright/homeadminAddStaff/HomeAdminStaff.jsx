import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { datas, staffData } from '../../../randomdata/data'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './HomeAdminStaff.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { onStaffRegisteration } from '../../../../services/allAPI'



const HomeAdminStaff = () => {
      const [previewImage, setPreviewImage] = useState('')
      const [profileImageError, setProfileImageError] = useState(false)

      const navigate=useNavigate()

       const [userData, setUserData] = useState({
          profileimg: "",
          firstName: "",
          lastName: "",
          address: "",
          DOB: "",
          phone: "",
          email: "",
          password: "",
          role:""
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

          const AddStaff=async()=>{
            const token=sessionStorage.getItem("token")
            if(token){
              if(userData.firstName&&userData.lastName&&userData.email&&userData.password&&userData.profileimg&&userData.phone&&userData.DOB&&userData.role){

                if(userData.phone.length>10){
                  toast.error("Please enter valid phone number!")
                }else{
                  const header={
                    'Authorization':`Bearer ${token}`
                  }
  
                  const payload= new FormData()
  
                  payload.append("firstname",userData.firstName)
                  payload.append("lastname",userData.lastName)
                  payload.append("DOB",userData.DOB)
                  payload.append("role",userData.role)
                  payload.append("phonenumber",userData.phone)
                  payload.append("email",userData.email)
                  payload.append("password",userData.password)
                  payload.append("imageurl",userData.profileimg)
  
                  try {
                    const serverResponce=await onStaffRegisteration(payload,header)
                    if(serverResponce.status==201){
                      toast.success(
                        "New staff member added successfully! Welcome aboard.",
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
                      setUserData({
                        firstName: "",
                        lastName: "",
                        DOB: "",
                        role: "",
                        phone: "",
                        email: "",
                        password: "",
                        profileimg: ""
                    });
                    }else if(serverResponce.status==409){
                      toast.error("Email already exists!")
                      setPreviewImage("")
                      setUserData({
                        firstName: "",
                        lastName: "",
                        DOB: "",
                        role: "",
                        phone: "",
                        email: "",
                        password: "",
                        profileimg: ""
                    });
                    }else{
                      toast.error("Failed to Add Staff!")
                    }
                  } catch (error) {
                    toast.error("Failed to Add Staff!")
                  }
                }
                
              

              }else{
                toast.error("All fields are required!")
              }

            }else{
              toast.error("Please Login Again!")
              navigate('/login')
            }
          }

          console.log(userData)

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

        const onTextChange = (e) => {
          
          if (e.name == "email") {
            setUserData(d => ({ ...d, email: e.value }));
            let regexTest = e.value.match(/^[a-zA-Z]*[0-9]*@?@gmail.com+$/)
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
      
  return (
    <div className='login-parent login-parent-staff'>
      <div className="login-child">
      <div className='login-profile-div mt-4'>
                <img key={previewImage}  src={previewImage ? previewImage : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" />
                <div className='d-flex flex-column '>
                  <label>

                    <p className='btn' style={{ backgroundColor: 'rgba(137, 43, 226, 0.414)', color: 'white' }}>choose a file</p>
                    <Form.Control   type="file" className="cursor-pointer w-50" onChange={(e) => setUserData({ ...userData, profileimg: e.target.files[0] })} required style={{ display: 'none' }} />

                  </label>

                  {profileImageError ? <p style={{ marginTop: '-16px', fontSize: '14px', color: 'red' }}>
                    Only JPEG, PNG, and JPG file  formats <br /> are supported.
                  </p> : <p style={{ marginTop: '-16px', fontSize: '14px', color: 'blueviolet' }}>
                    <p>Choose a file to upload.</p></p>}
                </div>

              </div>
              <div>

                <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
                  <Form.Control value={userData.firstName} type="text" placeholder="ex: Rosh" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} required />
                </FloatingLabel>

                <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
                  <Form.Control value={userData.lastName} type="text" placeholder="ex: Mathew" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} required />
                </FloatingLabel>
              </div>

              <div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="DOB" onChange={onDOB}/>
                      
                    </DemoContainer>
                  </LocalizationProvider>

                  


                  {valid.DOB ? <p style={{ marginTop: '-15px', color: 'red', fontWeight: "300" }}>Enter a valid age!</p> : ""}
                </div>

                <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
                  <Form.Control value={userData.phone} type="number" maxLength={10} placeholder="Enter your 10-digit number" className="cursor-pointer" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} required />
                </FloatingLabel>
              </div>
              <div>

                <Form.Select
                  aria-label="Default select example"
                  style={{ height: '60px' }}
                  onChange={(e) => {
                    const selectedData = staffData.find((a) => a['value'] == e.target.value)
                    if (selectedData) {
                      setUserData({ ...userData,role:selectedData.value })
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
                <Form.Control type="email" value={userData.email} name='email' placeholder="Enter your email" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
              </FloatingLabel>

              <FloatingLabel controlId="password" label="Enter 4 Digit password" className="mb-3">
                    <Form.Control type="password" value={userData.password} name='password' maxLength={4} placeholder="Enter your 4 Digit password" className="cursor-pointer" onChange={(e) => onTextChange(e.target)} required />
                  </FloatingLabel>
              </div>



              
        
             
              
             
           <button onClick={AddStaff}>Add</button>
      </div>
    </div>
  )
}

export default HomeAdminStaff
