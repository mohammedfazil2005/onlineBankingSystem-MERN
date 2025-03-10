import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-heading-details'>
        <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit adipisci fuga, asperiores eaque atque minima, possimus pariatur, vel temporibus praesentium? Cumque doloremque nostrum porro architecto iste vero ullam possimus.</p>
        <div>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>    
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className='footer-social'>
        <h1>Get in touch</h1>
        <p><i className="fa-solid fa-location-dot"></i>891,India</p>
        <p><i className="fa-solid fa-envelope"></i>fazil@gmail.com</p>
        <p> <i className="fa-solid fa-phone"></i>+91 9961423960</p>
        <p><i className="fa-solid fa-clock"></i> 07.00 AM - 23.00 PM</p>
      </div>
      <div className='footer-social'>
        <h1>Quick Links</h1>
        <p>Home</p>
        <p>About</p>
        <p>FAQs</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
       </footer>

  )
}

export default Footer
