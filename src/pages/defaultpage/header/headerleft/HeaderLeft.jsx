import React from 'react'
import './HeaderLeft.css'

const HeaderLeft = () => {
  return (
    <div className='header-left-parent'>
    <h1> You Can Do more with Right Card</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora non ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora non ipsam</p>
    <div className='header-left-button-div'>
        <button id='signup-btn'>Signup</button>
        <button>Get started</button>
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
