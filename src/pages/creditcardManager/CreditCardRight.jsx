import React from 'react'
import CreditCardManagerDashboard from './CreditCardManagerDashboard'
import HomeAdminCreditCardReq from '../admin/homeadminright/homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminCreditCardManage from '../admin/homeadminright/homeadmincreditCardManage/HomeAdminCreditCardManage'

import HomeRightNotifications from '../user/homeright/homerightnotification/HomeRightNotifications'


const CreditCardRight = ({categoryName}) => {
  return (
    <div>
      {categoryName=="Dashboard"?<CreditCardManagerDashboard/>:""}
      {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""},
      {categoryName=="Manage Credit Cards"?<HomeAdminCreditCardManage/>:""}
      {categoryName=="Notifications"?<HomeRightNotifications/>:""}

    </div>
  )
}

export default CreditCardRight
