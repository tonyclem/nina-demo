import React, { useContext, useState, useEffect } from "react";

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
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.amount,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cartItems,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
