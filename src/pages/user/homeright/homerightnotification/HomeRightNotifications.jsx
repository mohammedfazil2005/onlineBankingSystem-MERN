import React, { useEffect, useState } from 'react'
import './HomeRightNotifications.css'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onFetchAllNotifications } from '../../../../services/allAPI'
const HomeRightNotifications = () => {
  const [notification,setNotification]=useState([])
  const navigate=useNavigate()

  const fetchNotifications=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const header={
        'Authorization':`Bearer ${token}`
      }
      try {
        const serverResponce=await onFetchAllNotifications(header)
        if(serverResponce.status==200){
          setNotification(serverResponce.data)
        }else{
        
        }
      } catch (error) {
        console.log(error)
      }
    }else{
    }
  }

  useEffect(()=>{
    fetchNotifications()
  },[])

  console.log(notification)


  return (
    <div className='home-right-notifications-parent'>
      <div className="home-right-notification-heading">
        <h1>All Notifications</h1>
        <p>Stay updated with your account activities</p>
      </div>
      <div className='notfication-table-parent'>
        {notification.length>0?notification?.map((a)=>(
           <div key={a.id} className='notification-table-main'>
           <div>
           <i className='fa-solid fa-bell'></i>
           <p>{a?.message}...</p>
           </div>
       <div>
           <button>View</button>
       </div>
       </div>
        )):''}
       
        <hr />
      </div>
    </div>
  )
}

export default HomeRightNotifications
