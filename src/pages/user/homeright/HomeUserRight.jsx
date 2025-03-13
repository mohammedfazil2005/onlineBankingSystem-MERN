import React from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'
import HomeUserCards from './homerightUserCards/HomeUserCards'
import HomeRightPayment from './homeRightPayment/HomeRightPayment'
import HomeRightLoans from './homerightloans/HomeRightLoans'

const HomeUserRight = ({categoryName}) => {
  console.log(categoryName)
  return (
    <div>
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeUserCards/>:""}
      {categoryName=="Payment Transfer"?<HomeRightPayment/>:""}
      {categoryName=="Loans"?<HomeRightLoans/>:""}
      {categoryName=="Investments"?<HomeRightPayment/>:""}
     
    </div>
  )
}

export default HomeUserRight
