import React from 'react'
import CreditCardManagerDashboard from './CreditCardManagerDashboard'
import HomeAdminCreditCardReq from '../admin/homeadminright/homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminCreditCardManage from '../admin/homeadminright/homeadmincreditCardManage/HomeAdminCreditCardManage'
import HomeAdminNotifications from '../admin/homeadminright/homeadminNotifications/HomeAdminNotifications'

const CreditCardRight = ({categoryName}) => {
  return (
    <div>
      {categoryName=="Dashboard"?<CreditCardManagerDashboard/>:""}
      {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""},
      {categoryName=="Manage Credit Cards"?<HomeAdminCreditCardManage/>:""}
      {categoryName=="Notifications"?<HomeAdminNotifications/>:""}

    </div>
  )
}

export default CreditCardRight
