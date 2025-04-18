import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider =({children})=>{

    const navigate =useNavigate();
    const [user,setUser]=useState(null)
    const [isSeller,setSeller]=useState(null)

    const value = {navigate,user,setUser,isSeller,setSeller}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = ()=>{
    return useContext(AppContext)
}
