import React, { useState, useEffect, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ShopContext = createContext();

async function getData() {
  let cart = {};
  const collectionRef = collection(db, "Database");
  const docRef = await getDocs(collectionRef);
  docRef.forEach((doc) => {
    cart[doc.data().productId] = {
      quantity:0,
      category: doc.data().Category,
      price:doc.data().productPrice,
    };
  });
  return cart;
}

const Context = (props) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    getData().then((cartData) => {
        setCartItems(cartData);
    });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: prev[itemId].quantity + 1,
      },
    }));
    alert("Item added to cart")
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: Math.max(prev[itemId].quantity - 1, 0),
      },
    }));
}

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { Context, ShopContext }
