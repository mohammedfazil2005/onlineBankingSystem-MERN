import commonAPI from "./commonAPI"

export const onRegistration=async(data,header)=>{
  return await commonAPI('post','/register',data,header)
}

export const onLoginWithGoogle=async(data)=>{
  return await commonAPI("post",'/loginwith/google',data)
}

export const onLoginWithEmailAndPassword=async(data)=>{
  return await commonAPI("post",'/loginpassword',data)
}

export const onLoginWithEmail=async(data)=>{
  return await commonAPI("post",'/login',data)
}

export const onLoginOTP=async(data)=>{
  return await commonAPI("post",'/verify',data)
}

export const onFetchAllTransactions=async(header)=>{
  return await commonAPI("get",'/get/transactions',{},header)
}

export const onFetchAllNotifications=async(header)=>{
  return await commonAPI("get",'/get/notifications',{},header)
}

export const onFetchAllCards=async(header)=>{
  return await commonAPI("get",'/get/cards',{},header)
}

export const onTransaction=async(data,header)=>{
  return await commonAPI("post",'/transfermoney',data,header)
}

export const onTransactionOTP=async(data,header)=>{
  return await commonAPI("post",`/transfermoney/otp/${data}`,{},header)
}

export const onLoanApplication=async(data,header)=>{
  return await commonAPI("patch",`/loanapplication`,data,header)
}

export const onFetchLoans=async(header)=>{
  return await commonAPI("get",'/fetchloans',{},header)
}

export const onFetchProfile=async(header)=>{
  return await commonAPI("get",'/get/profile',{},header)
}

export const onUpdateProfile=async(data,header)=>{
  return await commonAPI("patch",'/update/profile',data,header)
}

export const onFetchAccountHolders=async(header)=>{
  return await commonAPI("get",'/getaccountholders',{},header)
}

export const onFetchAllBankTransactions=async(header)=>{
  return await commonAPI("get",'/getalltransaction',{},header)
}

export const onFetchApprovedCreditcards=async(header)=>{
  return await commonAPI("get",'/getcreditcards/approved',{},header)
}
export const onFetchAllBankNotifications=async(header)=>{
  return await commonAPI("get",'/getallnotifications',{},header)
}

export const onFetchCreditCardRequests=async(header)=>{
  return await commonAPI("get",'/getcreditcard/requests',{},header)
}

export const onFetchLoanRequests=async(header)=>{
  return await commonAPI("get",'/getloan/requests',{},header)
}

export const onStaffRegisteration=async(data,header)=>{
  return await commonAPI("post",'/addstaff',data,header)
}

export const onFetchAllStaffs=async(header)=>{
  return await commonAPI("get",'/getStaffs',{},header)
}

export const onFetchDashboardDetails=async(header)=>{
  return await commonAPI("get",'/getdashboard/details',{},header)
}

export const onApplyForCreditCard=async(data,header)=>{
  return await commonAPI("post",'/creditcardApplication',data,header)
}
export const onWithdraw=async(acco,data,header)=>{
  return await commonAPI("post",`/withdraw/${acco}`,data,header)
}
export const onWithdrawOTP=async(otp,header)=>{
  return await commonAPI("post",`/withdrawOTP/${otp}`,{},header)
}

