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
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
});

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const findCartItemToRemove = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (findCartItemToRemove.length > 0) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, amount: cartItem.amount - 1 }
      : cartItem
  );
};

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

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cartItems,
        cartCount,
        removeItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
