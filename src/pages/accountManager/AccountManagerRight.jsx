import React from 'react'
import AccountManagerDashboard from './AccountManagerDashboard'
import HomeAdminUserDetails from '../admin/homeadminright/homeadminUserDetails/HomeAdminUserDetails'
import StaffDepositMoney from '../staff/staffright/staffDepositMoney/StaffDepositMoney'
import HomeAdminNotifications from '../admin/homeadminright/homeadminNotifications/HomeAdminNotifications'

const AccountManagerRight = ({categoryName}) => {
  return (
    <div>
      {categoryName=="Dashboard"?<AccountManagerDashboard/>:""}
      {categoryName=="All Account Holders"?<HomeAdminUserDetails/>:""}
      {categoryName=="Withdraw from User"?<StaffDepositMoney/>:""}
      {categoryName=="Notifications"?<HomeAdminNotifications/>:""}
    </div>
  )
}

export default AccountManagerRight
