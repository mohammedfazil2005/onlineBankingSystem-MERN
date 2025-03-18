import React from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'
import HomeUserCards from './homerightUserCards/HomeUserCards'
import HomeRightPayment from './homeRightPayment/HomeRightPayment'
import HomeRightLoans from './homerightloans/HomeRightLoans'
import HomeRightMyLoans from './homeRightMyLoans/HomeRightMyLoans'
import HomeRightNotifications from './homerightnotification/HomeRightNotifications'
import HomeRightRepay from './homerightRepay/HomeRightRepay'
import HomePayLoan from './homepayloan/HomePayLoan'
import HomeRightProfile from './homerightProfile/HomeRightProfile'

const HomeUserRight = ({categoryName,setCategoryName}) => {
  console.log(categoryName)
  return (
    <div>
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeUserCards setCategoryName={setCategoryName}/>:""}
      {categoryName=="Payment Transfer"?<HomeRightPayment/>:""}
      {categoryName=="Loans"?<HomeRightLoans/>:""}
      {categoryName=="My Loans"?<HomeRightMyLoans setCategoryName={setCategoryName}/>:""}
      {categoryName=="Notifications"?<HomeRightNotifications/>:""}
      {categoryName=="Profile"?<HomeRightProfile/>:""}
      {categoryName=="repay"?<HomeRightRepay/>:""}
      {categoryName=="payloan"?<HomePayLoan/>:""}
     
    </div>
  )
}

export default HomeUserRight
