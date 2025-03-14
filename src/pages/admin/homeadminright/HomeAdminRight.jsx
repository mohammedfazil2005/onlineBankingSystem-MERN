import React from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'
import HomeAdminUserDetails from './homeadminUserDetails/HomeAdminUserDetails'
import HomeUserProfile from './homeUserProfile/HomeUserProfile'


const HomeAdminRight = ({categoryName,setCategoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="User Management"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile/>:""}
    </div>
  )
}

export default HomeAdminRight
