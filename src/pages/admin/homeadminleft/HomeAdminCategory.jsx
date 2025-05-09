import React, { useState } from 'react'
import './HomeAdminCategory.css'
const HomeAdminCategory = ({setCategoryName}) => {
    
    const [category,setCategory]=useState('Dashboard')
    
    
    const categoryDetails = [
        { name: "Admin Dashboard", fontClass: "fas fa-chart-pie" },
        { name: "Account holders", fontClass: "fas fa-users-cog" }, 
        { name: "Transactions", fontClass: "fas fa-exchange-alt" }, 
        {name:"Manage Credit Cards",fontClass:" fas fa-id-card"},
        { name: "Credit Card Requests", fontClass: "fa-solid fa-credit-card" },
        { name: "Loan Requests", fontClass: "fas fa-hand-holding-usd" },
        { name: "Manage Loans", fontClass: "fa-solid fa-bars-progress" },
        {name:"Add staff",fontClass:"fa-solid fa-clipboard-user"}, 
        { name: "Staff Management", fontClass: "fas fa-users-cog" }, 
        { name: "Notifications", fontClass: "fa-solid fa-bell" },
        { name: "Logout", fontClass: "fas fa-sign-out-alt" }  
      ];
      
    
  
    const onCategoryClick=(categoryname)=>{
      setCategory(categoryname)
      setCategoryName(categoryname)
     
    }
  return (
    <div className='home-category-parent'>
    {categoryDetails.map((a,index)=>(
     <div style={category==a.name?{borderLeft:'10px solid rgb(24,20,60)'}:{}} onClick={()=>onCategoryClick(a.name)} key={index}>
     <i className={a.fontClass}  style={category==a.name?{color:'rgb(24,20,60)'}:{}}></i>
      <h1  style={category==a.name?{color:'rgb(24,20,60)',fontWeight:'bold'}:{}}>{a.name}</h1>
      </div>
    ))}
   </div>
  )
}

export default HomeAdminCategory
