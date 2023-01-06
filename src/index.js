import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { LoginProvider } from "./context/loginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
      <LoginProvider>
        <App/>
      </LoginProvider>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
