import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { AuthContext } from '../../contexts/TokenContext';
import toast from 'react-hot-toast';


 


const Navbar = () => {

  const [showA, setShowA] = useState(true);

  const {role,setRole}=useContext(AuthContext)
  
const toggleShowA = () => setShowA(!showA);

const onLogout=()=>{
  toast.error("Logged out!")
  sessionStorage.clear()
  setRole("null")
}
  
  return (
    <>
    <div className='nav-div sticky-top'>
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
        {/* <li className="nav-item">
        <Link>Deposit</Link>
        </li> */}
       
      </ul>
      <form className="" role="search">
        <button type='button' onClick={toggleShowA}><i className="fa-solid fa-bell"></i></button>
       
        {role?<button onClick={()=>onLogout()} style={{border:'1px solid white'}} >Logout</button>: <Link><button style={{border:'1px solid white'}}>Logout</button></Link>}
              </form>
    </div>
  </div>
</nav>
    </div>
    <div className='float-end'>
    {/* <Col  className="mb-2">
        
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col> */}
      </div>
    </>
  )
}

export default Navbar
