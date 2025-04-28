import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider =({children})=>{

    const navigate =useNavigate();
    const [user,setUser]=useState(false);
    const [isSeller,setSeller]=useState(false);
    const [showLogin,setShowLogin]=useState(false);

    const value = {navigate,user,setUser,isSeller,setSeller,showLogin,setShowLogin}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = ()=>{
    return useContext(AppContext)
}
