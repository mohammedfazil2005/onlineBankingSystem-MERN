import React from 'react'
import './HomeUserCards.css'

const HomeUserCards = () => {
  return (
    <div className='home-user-cards-parent'>
      <div className="home-user-card-heading">
            <h1>My Bank Account</h1>
            <p>Effortlessly Manage Your Banking Activites</p>
      </div>
      <h6>Your cards</h6>
      <div className="user-card-div-main">
        <div className='main-card'>
           <div className='main-card-heading'>
           <h5>Bank Ai</h5>
           <p>Debit</p>
           </div>
           <div className='main-card-user-details'>
            <h4>ADRIAN HADJIN</h4>
            <p>06/24</p>
           </div>
           <div className='main-card-card-details'>
            <p><span>1234</span><span>1234</span> <span>1234</span></p>
            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
           </div>
        </div>


      </div>
    </div>
  )
}

export default HomeUserCards
