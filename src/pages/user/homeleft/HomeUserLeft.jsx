import React, { useState } from 'react'
import './HomeUserLeft.css'
const HomeUserLeft = ({setCategoryName}) => {

  const [category,setCategory]=useState('Dashboard')


  const catgegoryDetais=[
    { name: "Dashboard", fontClass: "fas fa-tachometer-alt" },
    { name: "Transactions", fontClass: "fas fa-exchange-alt" },
    { name: "Accounts", fontClass: "fas fa-wallet" },
    { name: "Payment Transfer", fontClass: "fa-solid fa-money-bill-transfer" },
    { name: "Loans", fontClass: "fas fa-hand-holding-usd" },
    { name: "My Loans", fontClass: "fa-solid fa-server" },
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

export default HomeUserLeft
