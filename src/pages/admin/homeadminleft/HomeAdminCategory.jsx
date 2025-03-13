import React, { useState } from 'react'
import './HomeAdminCategory.css'
const HomeAdminCategory = ({setCategoryName}) => {
    
    const [category,setCategory]=useState('Dashboard')
    
    
    const categoryDetails = [
        { name: "Admin Dashboard", fontClass: "fas fa-chart-pie" },
        { name: "User Management", fontClass: "fas fa-users-cog" }, 
        { name: "Transaction Management", fontClass: "fas fa-exchange-alt" },
        { name: "Accounts Management", fontClass: "fas fa-wallet" },
        { name: "Loan Approvals", fontClass: "fas fa-hand-holding-usd" },
        { name: "Payments & Transfers", fontClass: "fa-solid fa-money-bill-transfer" },
        { name: "Reports & Analytics", fontClass: "fas fa-chart-line" }, 
        { name: "Audit Logs", fontClass: "fas fa-file-alt" }, 
        { name: "System Settings", fontClass: "fas fa-cogs" },  
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
