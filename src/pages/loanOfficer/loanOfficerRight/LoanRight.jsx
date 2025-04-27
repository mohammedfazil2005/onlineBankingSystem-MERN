import React from 'react'
import HomeAdminLoanRequests from '../../admin/homeadminright/homeadminloanrequests/HomeAdminLoanRequests'
import HomeAdminNotifications from '../../admin/homeadminright/homeadminNotifications/HomeAdminNotifications'
import LoanOfficerDashboard from './LoanOfficerDashboard'
import HomeRightNotifications from '../../user/homeright/homerightnotification/HomeRightNotifications'

const LoanRight = ({categoryName}) => {
  return (
    <div>
        {categoryName=="Dashboard"?<LoanOfficerDashboard/>:""}
      {categoryName=="Loan Requests"?<HomeAdminLoanRequests/>:""}
      {categoryName=="Notifications"?<HomeRightNotifications/>:""}
    </div>
  )
}

export default LoanRight
