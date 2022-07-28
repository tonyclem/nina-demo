import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { ThemeContextWrapper } from "./context/theme_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </React.StrictMode>
  </ThemeContextWrapper>
);
