import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'

const PNF = () => {
  return (
    <div>
        <Navbar/>
      <div className='w-100 d-flex justify-content-center'>
      <img src="https://www.jccb.co.in/contentn/themes/jccb/assets/images/404-error.gif" alt=""  className='w-50 img-fluid'/>
      </div>
      <Footer/>
    </div>
  )
}

export default PNF
