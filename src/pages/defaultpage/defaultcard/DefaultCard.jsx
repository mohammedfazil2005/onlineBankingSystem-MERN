import React from 'react'
import './DefaultCard.css'
import { Link } from 'react-router-dom'

const DefaultCard = () => {
  return (
    <div className='default-card'>
      <div>
        <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/Credit_Card_Mockup_1161.png" alt="" />
      </div>
      <div>
        <h1>Explore the unexplored with Bankai</h1>
        <p>Unlock seamless banking with secure transactions, easy account management, and exclusive financial services.</p>
       <Link to={'/login'}> <button>Signup Now</button></Link>
      </div>
    </div>
  )
}

export default DefaultCard
