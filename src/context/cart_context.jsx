import React, { useContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, amount: cartItem.amount + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, amount: 1 }];
};

const CartContext = React.createContext({
  cartItems: [],
  total_items: 0,
  total_amount: 0,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
