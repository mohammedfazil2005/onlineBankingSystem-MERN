import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CreditCardLeft from './CreditCardLeft'
import CreditCardRight from './CreditCardRight'


const CreditCardManager = () => {
     const [categoryName,setCategoryName]=useState("Dashboard")
  return (
    <div>
    <>
    <Navbar/>
    <div className='home-parent'>
      <div className='home-left'>
          <CreditCardLeft setCategoryName={setCategoryName}/>
      </div>
      <div className='home-right'>
          <CreditCardRight categoryName={categoryName} setCategoryName={setCategoryName}/>
      </div>
  </div>
    </>
  </div>
  )
}

export default CreditCardManager
