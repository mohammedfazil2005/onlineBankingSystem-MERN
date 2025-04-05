import React from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'
import HomeAdminUserDetails from './homeadminUserDetails/HomeAdminUserDetails'
import HomeUserProfile from './homeUserProfile/HomeUserProfile'
import HomeAdminLoanRequests from './homeadminloanrequests/HomeAdminLoanRequests'
import HomeAdminTransactions from './homeadminallTransactions/HomeAdminTransactions'
import HomeAdminNotifications from './homeadminNotifications/HomeAdminNotifications'
import HomeAdminCreditCardReq from './homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminCreditCardManage from './homeadmincreditCardManage/HomeAdminCreditCardManage'
import HomeAdminStaff from './homeadminAddStaff/HomeAdminStaff'
import HomeAdminStaffManagement from './homeAdminStaffManagement/HomeAdminStaffManagement'


const HomeAdminRight = ({categoryName,setCategoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="User Management"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="Add staff"?<HomeAdminStaff/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile/>:""}
     {categoryName=="Loan Approvals"?<HomeAdminLoanRequests/>:""}
     {categoryName=="Transactions"?<HomeAdminTransactions/>:""}
     {categoryName=="Notifications"?<HomeAdminNotifications/>:""}
     {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""}
     {categoryName=="Manage Credit Cards"?<HomeAdminCreditCardManage/>:""}
     {categoryName=="Staff Management"?<HomeAdminStaffManagement/>:""}
    </div>
  )
}

export default HomeAdminRight
