import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Form, Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { AuthContext } from '../../contexts/TokenContext';
import toast from 'react-hot-toast';
import { Button, Modal } from 'react-bootstrap';





const Navbar = () => {

  const [showA, setShowA] = useState(true);

  const { role, setRole } = useContext(AuthContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const onLogout = () => {
    toast.error("Logged out!")
    sessionStorage.clear()
    setRole("null")
  }

  return (
    <>
      <div className='nav-div sticky-top'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand"><img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2.png" alt="" /></Link>
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
                <button type='button'><i className="fa-solid fa-bell"></i></button>

                {role ? <button type='button' onClick={()=>handleShow()} style={{ border: '1px solid white' }} >Logout</button> :<Link to={'/login'}> <button type='button' style={{ border: '1px solid white' }} >Login</button></Link>}
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose} size="md" >
  <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet',color:'white' }}  closeButton>
    <Modal.Title  >Confirm Logout</Modal.Title>
  </Modal.Header>

  <Modal.Body style={{ background: 'gray', border: '1px solid blueviolet',color:'white' }} >
    <h5 className="mb-4">Are you sure you want to log out?</h5>
    <div className="d-flex  gap-2">
      <button className="btn btn-secondary" onClick={handleClose}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
    </div>
  </Modal.Body>
</Modal>



    </>
  )
}

export default Navbar
