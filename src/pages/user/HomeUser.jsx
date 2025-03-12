import React, { useState } from 'react'
import HomeUserLeft from './homeleft/HomeUserLeft'
import HomeUserRight from './homeright/HomeUserRight'
import './HomeUser.css'
import Navbar from '../../components/Navbar/Navbar'

const HomeUser = () => {
  const [categoryName,setCategoryName]=useState("Dashboard")
  return (
    <>
    <Navbar/>
    <div className='home-parent'>
        <div className='home-left'>
            <HomeUserLeft setCategoryName={setCategoryName}/>
        </div>
        <div className='home-right'>
            <HomeUserRight categoryName={categoryName}/>
        </div>
    </div>
    </>
  )
}

export default HomeUser
