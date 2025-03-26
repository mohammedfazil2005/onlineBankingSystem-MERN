import React from 'react'
import './HeaderLeft.css'
import { Link } from 'react-router-dom'

const HeaderLeft = () => {
  return (
    <div className='header-left-parent'>
    <h1> You Can Do more with Right Card</h1>
    <p>Discover the benefits of having the right card for your needs. Enjoy exclusive rewards, seamless transactions, and financial flexibility tailored for you.</p>
    <div className='header-left-button-div'>
       <Link to={'/login'}> <button id='signup-btn'>Signup</button></Link>
       <Link to={'/login'}> <button>Get started</button></Link>
    </div>
  
    <div className='header-left-box-div'>
        <div>
            <h2>30k+</h2>
            <h6>Happy Customers</h6>
        </div>
        <div>
            <h2>15+</h2>
            <h6>Years Experience</h6>
        </div>
    </div>
    </div>
  )
}

export default HeaderLeft
