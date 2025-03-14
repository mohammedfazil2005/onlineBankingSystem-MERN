import React, { useState } from 'react'
import './HomeAdmin.css'
import Navbar from '../../components/Navbar/Navbar'
import HomeAdminCategory from './homeadminleft/HomeAdminCategory'
import HomeAdminRight from './homeadminright/HomeAdminRight'

const HomeAdmin = () => {

    const [categoryName,setCategoryName]=useState("Admin Dashboard")

    
  return (
    <>
    <Navbar/>
    <div className='home-parent'>
        <div className='home-left'>
            <HomeAdminCategory setCategoryName={setCategoryName}/>
        </div>
        <div className='home-rights'>
           <HomeAdminRight categoryName={categoryName} setCategoryName={setCategoryName}/>
        </div>
    </div>
    </>
  )
}

export default HomeAdmin
