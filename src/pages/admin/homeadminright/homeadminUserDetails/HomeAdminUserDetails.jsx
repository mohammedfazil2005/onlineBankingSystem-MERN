import React from 'react'
import './HomeAdminUserDetails.css'
import { TextField } from '@mui/material'

const HomeAdminUserDetails = ({setCategoryName}) => {
    const onHandleShow=()=>{
        setCategoryName("ViewProfile")
    }
    return (
        <div className='home-admin-userdetails-parent'>
            <div className="home-admin-user-details-heading">
                <h1>User Management</h1>
                <p>Manage user details</p>
            </div>
            <div className="home-admin-user-details-table-parent">
               <div className="user-details-table-card-main">
                <div>
                    <img src="https://cdn.create.vista.com/api/media/small/20030237/stock-photo-cheerful-young-man-over-white" alt="" />
                    <h2>Ray Clarke</h2>
                    <h6>ray.c@acem.com</h6>
                </div>
                <main>
                <p>Active</p>
                <button onClick={()=>onHandleShow()}>Show</button>
                </main>
               </div>
               <hr />
               
            </div>

        </div>
    )
}

export default HomeAdminUserDetails
