import React, { useState } from 'react'
const CreditCardLeft = ({setCategoryName}) => {
     const [category,setCategory]=useState('Dashboard')
    const categoryDetailsCreditManager = [
        { name: "Dashboard", fontClass: "fas fa-tachometer-alt" },
        { name: "Credit Card Requests", fontClass: "far fa-credit-card" },
        { name: "Manage Credit Cards", fontClass: "fas fa-id-card" },
        { name: "Notifications", fontClass: "fa-solid fa-bell" },
        { name: "Logout", fontClass: "fas fa-sign-in-alt" }
      ];

      const onCategoryClick=(categoryname)=>{
        setCategory(categoryname)
        setCategoryName(categoryname)
      }
  return (
    <div className='home-category-parent'>
    {categoryDetailsCreditManager.map((a,index)=>(
     <div style={category==a.name?{borderLeft:'10px solid rgb(24,20,60)'}:{}} onClick={()=>onCategoryClick(a.name)} key={index}>
     <i className={a.fontClass}  style={category==a.name?{color:'rgb(24,20,60)'}:{}}></i>
      <h1  style={category==a.name?{color:'rgb(24,20,60)',fontWeight:'bold'}:{}}>{a.name}</h1>
      </div>
    ))}
   </div>
  )
}

export default CreditCardLeft
