import React, { useState } from 'react'
import LoanOfficerLeft from './Loanofficerleft/LoanOfficerLeft'
import LoanRight from './loanOfficerRight/LoanRight'
import Navbar from '../../components/Navbar/Navbar'

const LoanOfficer = () => {
        const [categoryName,setCategoryName]=useState("Dashboard")
  return (
    <div>
      <>
      <Navbar/>
      <div className='home-parent'>
        <div className='home-left'>
            <LoanOfficerLeft setCategoryName={setCategoryName}/>
        </div>
        <div className='home-right'>
            <LoanRight categoryName={categoryName} setCategoryName={setCategoryName}/>
        </div>
    </div>
      </>
    </div>
  )
}

export default LoanOfficer
