import React from 'react'
import { Link } from 'react-router-dom'
import './DefaultNavbar.css'

const DefaultNavbar = () => {
  return (
    <div className='de-nav-div'>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand"><img  src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2.png" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link>Home</Link>
        </li>   
        <li className="nav-item">
        <Link>About</Link>
        </li>
       
      </ul>
      <form className="" role="search">
        <button>Contact</button>
        <button style={{border:'1px solid white'}}>Login</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default DefaultNavbar
