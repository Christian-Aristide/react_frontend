import { createContext } from "react";
import { food_list } from "../../assets/assets";

// je crée un context 
export const StoreContext = createContext(null)

// je crée une fonction 
const StoreContextProvider = (props) => {
  const contextValue = {
    food_list
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;