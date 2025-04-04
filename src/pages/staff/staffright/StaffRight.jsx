import React from 'react'
import HomeAdminCreditCardReq from '../../admin/homeadminright/homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminLoanRequests from '../../admin/homeadminright/homeadminloanrequests/HomeAdminLoanRequests'
import StaffDepositMoney from './staffDepositMoney/StaffDepositMoney'
import HomeRightNotifications from '../../user/homeright/homerightnotification/HomeRightNotifications'
import StaffDashboard from './staffDashboard/StaffDashboard'


const StaffRight = ({categoryName}) => {
  return (
    <div>
       {categoryName=="Dashboard"?<StaffDashboard/>:""} 
       {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""} 
       {categoryName=="Loan Requests"?<HomeAdminLoanRequests/>:""}
       {categoryName=="Withdraw from User"?<StaffDepositMoney/>:""}
       {categoryName=="Notifications"?<HomeRightNotifications/>:""}

    </div>
  )
}

export default StaffRight
