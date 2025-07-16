import React from 'react'
import {createContext, useContext,} from 'react';

interface ShopContextType {
    backendUrl : string;
}
export const ShopContext = createContext<ShopContextType | undefined>(undefined)

interface ShopContextTypeProps {
    children:ReactNode
}
const ShopContextProvider:React.FC <ShopContextTypeProps> = (props) => {
  
    const backendUrl = ""
    
    const Value : ShopContextType = {
        backendUrl
    }
    return (
     <ShopContext.Provider value ={Value}>
     {props.children}


     </ShopContext.Provider>
      )
    }
    
    
export const UseShopContext = () =>{
    return UseContext(ShopContext)
}

export default ShopContextProvider