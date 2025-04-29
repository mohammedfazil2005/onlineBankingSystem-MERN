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
import HomeStaffProfile from './homestaffProfile/HomeStaffProfile'
import HomeAdminApprovedLoan from './homeadminApprovedLoan/HomeAdminApprovedLoan'


const HomeAdminRight = ({categoryName,setCategoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="Account holders"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="Add staff"?<HomeAdminStaff/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile setCategoryName={setCategoryName}/>:""}
     {categoryName=="Loan Requests"?<HomeAdminLoanRequests setCategoryName={setCategoryName}/>:""}
     {categoryName=="Transactions"?<HomeAdminTransactions/>:""}
     {categoryName=="Notifications"?<HomeAdminNotifications/>:""}
     {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq setCategoryName={setCategoryName}/>:""}
     {categoryName=="Manage Credit Cards"?<HomeAdminCreditCardManage/>:""}
     {categoryName=="Staff Management"?<HomeAdminStaffManagement setCategoryName={setCategoryName}/>:""}
     {categoryName=="viewstaffprofile"?<HomeStaffProfile/>:""}
     {categoryName=="Manage Loans"?<HomeAdminApprovedLoan/>:""}
    </div>
  )
}

export default HomeAdminRight
