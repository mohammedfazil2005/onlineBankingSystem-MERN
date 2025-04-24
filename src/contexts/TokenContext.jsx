import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

const AuthenticationContext=({children})=>{
    const [isToken,setIsToken]=useState(true)

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsToken(true)
        }else{
            setIsToken(false)
        }
    },[isToken])
    
    return(
        <AuthContext.Provider value={{isToken,setIsToken}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthenticationContext;