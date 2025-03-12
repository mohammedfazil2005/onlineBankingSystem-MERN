import React from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'
import HomeUserCards from './homerightUserCards/HomeUserCards'
import HomeRightPayment from './homeRightPayment/HomeRightPayment'

const HomeUserRight = ({categoryName}) => {
  console.log(categoryName)
  return (
    <div>
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeUserCards/>:""}
      {categoryName=="Payment Transfer"?<HomeRightPayment/>:""}
      {categoryName=="Settings"?<HomeRightUserDashboard/>:""}
     
    </div>
  )
}

export default HomeUserRight
