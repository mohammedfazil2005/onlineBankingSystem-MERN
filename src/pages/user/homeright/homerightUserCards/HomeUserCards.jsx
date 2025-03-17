import React, { useState } from 'react'
import './HomeUserCards.css'



const HomeUserCards = () => {

  return (
    <div className='home-user-cards-parent'>
      <div className="home-user-card-headings">
        
            <h1>My Bank Account</h1>
            <p>Effortlessly Manage Your Banking Activites</p>
            
      </div>
      <div className="home-user-card-headings">
      <h6>Apply for a Credit Card</h6>
            
      </div>
      <h2 style={{letterSpacing:'1px',fontSize:'17px'}}>Debit Card</h2>
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

        <div className="main-card-right">
          <div className='main-card-right-money-details-div'>
          <div>
            <p>Received</p>
            <h6>₹299</h6>
          </div>
          <div>
          <h2>Available</h2>
          <h6 style={{color:'white',fontWeight:"bold",fontSize:'25px',letterSpacing:'2px'}}>₹299</h6>
          </div>
          <div>
          <p>Sent</p>
          <h6>₹299</h6>
          </div>
        </div>
      
      <div className="main-card-right-account-holder-details">
        <div>
          <h6>Cardholder Name</h6>
          <p><i class="fa-solid fa-user" style={{fontSize:'14px'}}></i> James DENIS</p>
        </div>
        <div>
          <h6>Card Number</h6>
          <p><img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" /><span>5300</span><span>5848</span><span>9581</span></p>
        </div>
        <section>
          <main>
            <h6>Expires</h6>
            <p>01/23</p>
          </main>
          <main>
            <h6>CVV</h6>
            <p>***</p>
          </main>
        </section>
      </div>


        </div>

        <div className="card-buttons-div">
          <button>Delete Card</button>
        </div>
   

        


      </div>

      <h2 style={{letterSpacing:'1px',fontSize:'17px'}}>Credit Card</h2>

      <div className="user-card-div-main">
        <div className='main-card' style={{background:'url(https://img.freepik.com/free-vector/red-wavy-background_1189-269.jpg?t=st=1742144590~exp=1742148190~hmac=58499faebca52b4edf5bbae339e2b93062d3cbd7b10432b9bf782e4c4da83de8&w=826)'}}>
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

        <div className="main-card-right">
          <div className='main-card-right-money-details-div' style={{background:'url(https://img.freepik.com/free-vector/red-wavy-background_1189-269.jpg?t=st=1742144590~exp=1742148190~hmac=58499faebca52b4edf5bbae339e2b93062d3cbd7b10432b9bf782e4c4da83de8&w=826)'}}>
          <div>
            <p>Received</p>
            <h6>₹299</h6>
          </div>
          <div>
          <h2>Available</h2>
          <h6 style={{color:'white',fontWeight:"bold",fontSize:'25px',letterSpacing:'2px'}}>₹299</h6>
          </div>
          <div>
          <p>Sent</p>
          <h6>₹299</h6>
          </div>
        </div>
      
      <div className="main-card-right-account-holder-details" style={{background:'url(https://img.freepik.com/free-vector/red-wavy-background_1189-269.jpg?t=st=1742144590~exp=1742148190~hmac=58499faebca52b4edf5bbae339e2b93062d3cbd7b10432b9bf782e4c4da83de8&w=826)'}}>
        <div>
          <h6>Cardholder Name</h6>
          <p><i class="fa-solid fa-user" style={{fontSize:'14px'}}></i> James DENIS</p>
        </div>
        <div>
          <h6>Card Number</h6>
          <p><img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" /><span>5300</span><span>5848</span><span>9581</span></p>
        </div>
        <section>
          <main>
            <h6>Expires</h6>
            <p>01/23</p>
          </main>
          <main>
            <h6>CVV</h6>
            <p>***</p>
          </main>
        </section>
      </div>


        </div>

        <div className="card-buttons-div">
          <button>Delete Card</button>
        </div>
   

        


      </div>
    </div>
  )
}

export default HomeUserCards
