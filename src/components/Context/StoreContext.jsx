
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

  useEffect(()=>{
    console.log(cartItems)
  }, [cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
