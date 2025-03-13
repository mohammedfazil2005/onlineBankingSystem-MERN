import React from 'react'
import './HomeRightNotifications.css'
import { ListGroup } from 'react-bootstrap'
const HomeRightNotifications = () => {
  return (
    <div className='home-right-notifications-parent'>
      <div className="home-right-notification-heading">
        <h1>All Notifications</h1>
        <p>Stay updated with your account activities</p>
      </div>
      <div className='notfication-table-parent'>
        <div className='notification-table-main'>
            <div>
            <i className='fa-solid fa-bell'></i>
            <p>Your Fixed Deposit of ₹1,00,000 will..</p>
            </div>
        <div>
            <button>View</button>
        </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default HomeRightNotifications
