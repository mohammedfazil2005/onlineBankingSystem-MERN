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
