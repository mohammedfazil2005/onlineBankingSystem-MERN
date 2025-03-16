import React from 'react'
import './DefaultMiddle.css'
import { Link } from 'react-router-dom'

const DefaultMiddle = () => {
    const boxDetails=[
        {title:"Most Secure Payment",classname:"fa solid fa-lock-open"},
        {title:"All In One Features",classname:"fa solid fa-arrows-rotate"},
        {title:"",classname:""},
        {title:"Easy Payment Method",classname:"fa solid fa-lock-open"},
    ]
  return (
    <div className='defaultmiddle-parent'>
      <div className='defaultmiddle-left'>
        <h1>A Right Choice changes everything</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim quam eos cupiditate pariatur voluptatum harum </p>
        <div className='deposit-btn-div'>
      <Link to={'/deposit'}><button>Deposit</button></Link>
    </div>
      </div>
      <div className='defaultmiddle-right'>
        {boxDetails.map((a,index)=>(
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
