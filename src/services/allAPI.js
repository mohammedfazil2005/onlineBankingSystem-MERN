import commonAPI from "./commonAPI"

export const onRegistration=async(data,header)=>{
  return await commonAPI('post','/register',data,header)
}