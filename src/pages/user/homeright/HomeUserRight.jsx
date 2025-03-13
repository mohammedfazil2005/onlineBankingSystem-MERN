import React from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'
import HomeUserCards from './homerightUserCards/HomeUserCards'
import HomeRightPayment from './homeRightPayment/HomeRightPayment'
import HomeRightLoans from './homerightloans/HomeRightLoans'
import HomeRightMyLoans from './homeRightMyLoans/HomeRightMyLoans'
import HomeRightNotifications from './homerightnotification/HomeRightNotifications'

const HomeUserRight = ({categoryName}) => {
  console.log(categoryName)
  return (
    <div>
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeUserCards/>:""}
      {categoryName=="Payment Transfer"?<HomeRightPayment/>:""}
      {categoryName=="Loans"?<HomeRightLoans/>:""}
      {categoryName=="My Loans"?<HomeRightMyLoans/>:""}
      {categoryName=="Notifications"?<HomeRightNotifications/>:""}
     
    </div>
  )
}

export default HomeUserRight
