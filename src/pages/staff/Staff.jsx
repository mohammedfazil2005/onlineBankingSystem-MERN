import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import StaffRight from './staffright/StaffRight'
import StaffLeft from './staffleft/StaffLeft'

const Staff = () => {
    const [categoryName,setCategoryName]=useState("Dashboard")
  return (
    <div>
      <>
      <Navbar/>
      <div className='home-parent'>
        <div className='home-left'>
            <StaffLeft setCategoryName={setCategoryName}/>
        </div>
        <div className='home-right'>
            <StaffRight categoryName={categoryName} setCategoryName={setCategoryName}/>
        </div>
    </div>
      </>
    </div>
  )
}

export default Staff
