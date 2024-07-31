import React, { createContext, useEffect, useState } from 'react';
import products from '../Assets/all_products'; 

const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  products.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_products] = useState(products);

  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0)
    }));
  };

  const getTotalAmounts = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let info = products.find((product) => product.id === Number(item));
        totalAmount += info.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmounts,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider };
export default ShopContext;