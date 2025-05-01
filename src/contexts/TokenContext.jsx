import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

const AuthenticationContext=({children})=>{
    const [isToken,setIsToken]=useState(true)
    const [role,setRole]=useState(sessionStorage.getItem("role"))
    const [email,setEmail]=useState("")
    const [userID,setUserID]=useState("")
    const [loanid,setLoanid]=useState("")
    const [payment,setPayment]=useState("")

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsToken(true)
        }else{
            setIsToken(false)
        }
    },[isToken,role])
    
    return(
        <AuthContext.Provider value={{isToken,setIsToken,role,setRole,email,setEmail,userID,setUserID,loanid,setLoanid,setPayment,payment}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthenticationContext;