import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountManagerLeft from './AccountManagerLeft'
import AccountManagerRight from './AccountManagerRight'

const AccountManager = () => {
     const [categoryName,setCategoryName]=useState("Dashboard")
     
  return (
    <div>
    <>
    <Navbar/>
    <div className='home-parent'>
      <div className='home-left'>
          <AccountManagerLeft setCategoryName={setCategoryName}/>
      </div>
      <div className='home-right'>
          <AccountManagerRight categoryName={categoryName} setCategoryName={setCategoryName}/>
      </div>
  </div>
    </>
  </div>
  )
}

export default AccountManager
