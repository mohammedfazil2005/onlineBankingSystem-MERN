import React from 'react'
import './DefaultAds.css'
import { Link } from 'react-router-dom'

const DefaultAds = () => {
  return (
    <div className='default-ads'>
        <div>
      <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/Credit_Card_Mockup_1153-1.png" alt="" />
      </div>
      <div>
        <h1>Choose your own Unique Credit Card</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minus labore sed, accusantium rem vero veniam ducimus nesciunt aspernatur non officiis similique mollitia error consequuntur impedit. Eos officia consectetur iusto.</p>
       <Link to={'/login'}><button>Sign Up Now</button></Link>
      </div>

    </div>
  )
}

export default DefaultAds
