import React from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'

const HomeUserRight = ({categoryName}) => {
  console.log(categoryName)
  return (
    <div>
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeRightUserDashboard/>:""}
      {categoryName=="Loans"?<HomeRightUserDashboard/>:""}
      {categoryName=="Settings"?<HomeRightUserDashboard/>:""}
     
    </div>
  )
}

export default HomeUserRight
