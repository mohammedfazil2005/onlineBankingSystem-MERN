import React from 'react'
import './HomeStaffProfile.css'
const HomeStaffProfile = () => {
  return (
    <div className='home-staff-profile'>
      <div className="home-staff-profile-left">
        <img src="https://www.pngplay.com/wp-content/uploads/2/Happy-Man-Transparent-PNG.png" alt="" />
      </div>
      <div className="home-staff-profile-right">
        <div className="admin-profile-detail">
          <h6>
            <i class="fa-solid fa-user"></i>
            <span> Name: John Doe </span>
          </h6>
        </div>
        <div className="admin-profile-detail">
          <h6>
            <i class="fa-solid fa-user-shield"></i>
            <span> Role: Creditcard Manager </span>
          </h6>
        </div>
        <div className="admin-profile-detail">
          <h6>
            <i class="fa-solid fa-envelope"></i>
            <span> Email: john.doe@example.com </span>
          </h6>
        </div>
        <div className="admin-profile-detail">
          <h6>
            <i class="fa-solid fa-phone"></i>
            <span> Phone: +91 98765 43210 </span>
          </h6>
        </div>
        <div className="admin-profile-detail">
           <button>Remove staff</button>
        </div>
      </div>
    </div>
  )
}

export default HomeStaffProfile
