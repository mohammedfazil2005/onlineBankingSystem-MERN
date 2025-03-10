import React from 'react'
import './DefaultHistory.css'
const DefaultHistory = () => {
    const historyDetails=[
        {value:"15 K",title:"Satisfied Clients"},
        {value:"120 M",title:"Total Transaction"},
        {value:"14 K",title:"Active User"},
    ]
  return (
    <div className='default-history'>
        {historyDetails.map((a,key)=>(
            <div key={key}>
            <h1>{a.value} <sup>+</sup></h1>
            <p>{a.title}</p>
            </div>
        ))}
      
    </div>
  )
}

export default DefaultHistory
