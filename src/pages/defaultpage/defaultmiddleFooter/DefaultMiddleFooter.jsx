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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi unde nihil, beatae fugiat eius, veniam neque velit exercitationem incidunt est minus eveniet ipsam non mollitia odit sunt laboriosam optio?</p>
       <Link to={'/login'}><button>Get started</button></Link>
      </div>
    </div>
  )
}

export default DefaultMiddleFooter
