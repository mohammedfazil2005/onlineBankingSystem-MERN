import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"  href="#"><img id='logo-nav' src="https://companieslogo.com/img/orig/O39.SI-d00b23e8.png?t=1729873664" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Overview</a>
        </li>
      </ul>
      <form class="" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button><i className="fa-solid fa-gear"></i></button>     
        <button><i class="fa-solid fa-bell"></i></button>
        {/* <img src="https://themewagon.github.io/bankdash/assets/avatar-CDT9_MFd.jpg" alt="" /> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
