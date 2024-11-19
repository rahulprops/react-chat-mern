import { createContext, useContext, useState } from "react";
import cookies from 'js-cookie'
export const  AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}
export const AuthContextProvider=({children})=>{
const [authUser,setAuthUser]=useState(cookies.get("token" || null))
return <AuthContext.Provider value={{authUser  , setAuthUser}}>
    {children}
</AuthContext.Provider>
}