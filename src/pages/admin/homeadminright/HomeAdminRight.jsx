import React from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'
import HomeAdminUserDetails from './homeadminUserDetails/HomeAdminUserDetails'
import HomeUserProfile from './homeUserProfile/HomeUserProfile'
import HomeAdminLoanRequests from './homeadminloanrequests/HomeAdminLoanRequests'
import HomeAdminTransactions from './homeadminallTransactions/HomeAdminTransactions'
import HomeAdminNotifications from './homeadminNotifications/HomeAdminNotifications'
import HomeAdminCreditCardReq from './homeadmincreditCardRequests/HomeAdminCreditCardReq'


const HomeAdminRight = ({categoryName,setCategoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="User Management"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile/>:""}
     {categoryName=="Loan Approvals"?<HomeAdminLoanRequests/>:""}
     {categoryName=="Transactions"?<HomeAdminTransactions/>:""}
     {categoryName=="Notifications"?<HomeAdminNotifications/>:""}
     {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""}
    </div>
  )
}

export default HomeAdminRight
