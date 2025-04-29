import React, { useEffect, useState } from 'react'
import './HomeRightProfile.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { onFetchProfile, onUpdateProfile } from '../../../../services/allAPI'

const HomeRightProfile = () => {

  const [profileData,setProfileData]=useState({})
  const [updateProfile,setUpdateProfile]=useState({
    email:"",
    DOB:"",
    firstname:"",
    lastname:"",
    phonenumber:"",
    pincode:"",
    state:"",
    imageurl:""
  })

  const [previewImage,setPreviewImage]=useState("")
  const [settingPreview,SetSettingPreview]=useState("")

  const [change,setChange]=useState("")



  const navigate=useNavigate()

  const fetchProfile=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const header={
        'Authorization':`Bearer ${token}`
      }

      try {

        const serverResponce=await onFetchProfile(header)
        console.log(serverResponce)
        if(serverResponce.status==200){
          setProfileData(serverResponce.data)
        }
        
      } catch (error) {
        console.log(error)
      }


    }else{
      toast.error("Please login again!")
      navigate('/login')
    }
  }

  const updateBtnClick=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){

      const header={
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }

      const payload=new FormData()

      payload.append("firstname",updateProfile.firstname)
      payload.append("lastname",updateProfile.lastname)
      payload.append("email",updateProfile.email)
      payload.append("DOB",updateProfile.DOB)
      payload.append("phonenumber",updateProfile.phonenumber)
      payload.append("state",updateProfile.state)
      payload.append("pincode",updateProfile.pincode)
      previewImage?payload.append("imageurl",settingPreview):payload.append("imageurl",updateProfile.imageurl)
      try {
        const serverResponce=await onUpdateProfile(payload,header)
        if(serverResponce.status==200){
          toast.success("Updated successfully!")
          setChange("haha")

        }else{
          toast.error("Please try again after some time!")
      }
        
      } catch (error) {
        console.log(error)
        toast.error("Please try again!")
      }

    }else{
      toast.error("Login again")
      navigate('/login')
    }
  }


  useEffect(()=>{
    if(settingPreview){
      if(settingPreview.type=="image/png" ||settingPreview.type=="image/jpeg"||settingPreview.type=="image/jpg"){
        setPreviewImage(URL.createObjectURL(settingPreview))
      }else{
        toast.error(" Only JPEG, PNG, and JPG file  formats are supported")
      }
    }
  },[settingPreview])




  useEffect(()=>{
    if(profileData){
      setUpdateProfile({
        firstname:profileData?.firstname,
        lastname:profileData?.lastname,
        email:profileData?.email,
        imageurl:profileData?.imageurl,
        DOB:profileData?.DOB,
        state:profileData?.state,
        pincode:profileData?.pincode,
        phonenumber:profileData?.phonenumber
      })
    }
  },[profileData])

  useEffect(()=>{
    fetchProfile()
  },[change])

  console.log(profileData)




  return (
    <>    <div className="home-user-card-headings">
    <h1>Your Information</h1>
    <p>Here you can edit public information about yourself. <br /> The changes will be displayed for other users within 5 minutes.</p>
</div>
    <div className='user-profile-page-parent'>

      <div className="user-profile-page-left">
       
        <div className="user-profile-page-left-input-div">
        <div>
          <h6>Email address</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,email:e.target.value})} value={updateProfile.email} />
        </div>
        <div>
          <section>
          <main>
          <h6>First Name</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,firstname:e.target.value})} value={updateProfile.firstname} />
          </main>
          <main>
          <h6>Last Name</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,lastname:e.target.value})} value={updateProfile.lastname} />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
          <h6>DOB</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,DOB:e.target.value})} value={updateProfile.DOB} />
          </main>
          <main>
          <h6>Phone</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,phonenumber:e.target.value})} value={updateProfile.phonenumber} />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
          <h6>STATE</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,state:e.target.value})} value={updateProfile.state} />
          </main>
          <main>
          <h6>PINCODE</h6>
          <input type="text" onChange={(e)=>setUpdateProfile({...updateProfile,pincode:e.target.value})} value={updateProfile.pincode} />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
        
          </main>
          <main>
          <button onClick={updateBtnClick}>Update</button>
          </main>
          </section>
        </div>
        </div>
       
        
      </div>
      <div className="user-profile-page-right">
        <label className='d-flex flex-column gap-2'>
          <input type="file" style={{display:'none'}} onChange={(e)=>SetSettingPreview(e.target.files[0])}  />
        <img src={previewImage?previewImage:`http://localhost:3000/uploads/${updateProfile.imageurl}`} alt="" />
        <button>Change</button>
        </label>
      </div>
    </div>
    </>

  )
}

export default HomeRightProfile
