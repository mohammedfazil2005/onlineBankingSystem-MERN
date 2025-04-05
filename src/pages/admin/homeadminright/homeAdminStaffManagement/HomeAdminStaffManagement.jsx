
import React from 'react'

const HomeAdminStaffManagement = () => {
   
  return (
    <div className='home-admin-userdetails-parent'>

            <div className="home-admin-user-details-heading">
                <h1>Staff Management</h1>
                <p>Manage staff details</p>
            </div>
            <div className="home-admin-user-details-search">
                <input type="text" placeholder='Search user' />
                <button>Search</button>
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

export default HomeAdminStaffManagement
