import React from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'
import HomeAdminUserDetails from './homeadminUserDetails/HomeAdminUserDetails'
import HomeUserProfile from './homeUserProfile/HomeUserProfile'
import HomeAdminLoanRequests from './homeadminloanrequests/HomeAdminLoanRequests'


const HomeAdminRight = ({categoryName,setCategoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="User Management"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile/>:""}
     {categoryName=="Loan Approvals"?<HomeAdminLoanRequests/>:""}
    </div>
  )
}

export default HomeAdminRight
