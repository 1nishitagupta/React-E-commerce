import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const localCartData = () => {
  let localCartData = localStorage.getItem("cart");
  if (localCartData === null) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  cart: localCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIncrease = (id) => {
    return dispatch({type: "INCREASE_QUANTITY", payload: id})
  }

  const setDecrease = (id) => {
    return dispatch({type: "DECREASE_QUANTITY", payload: id})
  }

  const addToCart = (id, color, quantity, singleProduct) => {
    
    localStorage.setItem("cart", JSON.stringify(state.cart));
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, singleProduct },
    });
  };

  const removeItem = (id) => {
    return dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    return dispatch({ type: "REMOVE_ALL_ITEM" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart , setIncrease ,setDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
