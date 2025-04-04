import React from 'react'
import './DefaultMiddleFooter.css'
import { Link } from 'react-router-dom'

const DefaultMiddleFooter = () => {
  return (
    <div className='default-middle-footer'>
        <div>
      <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/iPhone-Mockup-2.2-1.png" alt="" />
      </div>
      <div>
        <h1>Ready to join Bankai?</h1>
        <p>Experience seamless banking with security, convenience, and exclusive benefits. Open your account today and take control of your financial journey with Bankai.</p>
       <Link to={'/login'}><button>Get started</button></Link>
      </div>
    </div>
  )
}

export default DefaultMiddleFooter
