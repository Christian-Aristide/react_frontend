
// Ce fichier sert a créé des context (hooks)

import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

// je crée un context
export const StoreContext = createContext(null);

// je crée une fonction
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // fonction pour ajouté quelque chose au panier 
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // fonction pour supprimer quelque chose du panier 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // était pour vérifier les produit ajouté dans le panier 
  // useEffect(()=>{
  //   console.log(cartItems)
  // }, [cartItems])

  // fonction pour avoir le prix total en fonction des prix et quantité 
  const getTotalCartAmount =() =>{
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item]>0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item]
      }
      return totalAmount;
    }
  }

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
