import React, { createContext, useState } from 'react'
import all_product  from "../../assents/all_product"


export const ShopContext = createContext(null)

 const getDefaultCart = ()=>
 {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
       cart[index] = 0;    
  }
  return cart;

 }
const ShopcontextProvider = (Props) => {
  const [cartItems,setCartItem] =useState(getDefaultCart())
  
  const addtoCart  = (itemId) =>
    {
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart  = (itemId) =>
      {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }
      const ContextValue ={all_product,cartItems,addtoCart,removeFromCart};

  return (
    <ShopContext.Provider value={ContextValue}>
        {Props.children}
    </ShopContext.Provider>
  )
}

export default ShopcontextProvider
