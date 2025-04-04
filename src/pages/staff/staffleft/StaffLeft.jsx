import React, { useState } from 'react'

const StaffLeft = ({setCategoryName}) => {
    
     const [category,setCategory]=useState('Dashboard')
      const catgegoryDetais=[
        { name: "Dashboard", fontClass: "fas fa-tachometer-alt" },
        { name: "Credit Card Requests", fontClass: "far fa-credit-card" },
        { name: "Loan Requests", fontClass: "fas fa-file-invoice-dollar" },
        { name: "Withdraw from User", fontClass: "fas fa-money-bill-transfer" },
        { name: "Notifications", fontClass: "fa-solid fa-bell" },
        { name: "Logout", fontClass: "fas fa-sign-in-alt" }
       
      ]
      
    
      const onCategoryClick=(categoryname)=>{
        setCategory(categoryname)
        setCategoryName(categoryname)
      }
  return (
    <div className='home-category-parent'>
    {catgegoryDetais.map((a,index)=>(
     <div style={category==a.name?{borderLeft:'10px solid rgb(24,20,60)'}:{}} onClick={()=>onCategoryClick(a.name)} key={index}>
     <i className={a.fontClass}  style={category==a.name?{color:'rgb(24,20,60)'}:{}}></i>
      <h1  style={category==a.name?{color:'rgb(24,20,60)',fontWeight:'bold'}:{}}>{a.name}</h1>
      </div>
    ))}
   </div>
  )
}

export default StaffLeft
