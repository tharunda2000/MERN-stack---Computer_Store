import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext();

export const AppContextProvider =({children})=>{

    const currency =import.meta.VITE_CURRENCY;


    const navigate =useNavigate();
    const [user,setUser]=useState(false);
    const [isSeller,setSeller]=useState(false);
    const [showLogin,setShowLogin]=useState(false);
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState({});
    
    //fetch all products
    const fetchProducts = async ()=>{
        setProducts([dummyProducts])
    }

    //Add a product to the cart
    const addToCart = () =>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId]+=1;
        }

        else{
            cartData[itemId]=1;
        }

        setCartItems(cartData);
        toast.success("Added to cart")
    }

    

    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigate,user,setUser,isSeller,setSeller,showLogin,setShowLogin,products,currency,addToCart}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = ()=>{
    return useContext(AppContext)
}
