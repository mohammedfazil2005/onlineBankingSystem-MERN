import React from 'react'
import './DefaultMiddle.css'
import { Link } from 'react-router-dom'

const DefaultMiddle = () => {
  const boxDetails = [
    { title: "Most Secure Payment", classname: "fa solid fa-lock-open" },
    { title: "All In One Features", classname: "fa solid fa-arrows-rotate" },
    { title: "", classname: "" },
    { title: "Easy Payment Method", classname: "fa solid fa-lock-open" },
  ]
  return (
    <div className='defaultmiddle-parent'>
      <div className='defaultmiddle-left'>
        <h1>Bank Smarter, Live Better</h1>
        <p>Experience the future of digital banking. Track transactions, apply for cards or loans, and manage your finances — all in one place.</p>
        <div className='deposit-btn-div'>
          <Link to={'/login'}>
            <button style={{ backgroundColor: 'blueviolet', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', fontSize: '16px' }}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className='defaultmiddle-right'>
        {boxDetails.map((a, index) => (
          <div key={index}>
            <i className={a.classname}></i>
            <h3>{a.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DefaultMiddle
