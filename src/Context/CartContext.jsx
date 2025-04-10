import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(isLoaded){
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  
  }, [cartItems]);
  
  useEffect(() => {
    const itemsFromStorage =  localStorage.getItem("cartItems");;
    console.log("itemsFromStorage=>",itemsFromStorage);
    if (itemsFromStorage) {
      setCartItems([...JSON.parse(itemsFromStorage)]);
    }
    setIsLoaded(true);
  }, []);
  
  

  //add item to the cart
  function addItemToCart(item) {
    const arr = cartItems;

    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      // item array ma nahi ha
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);
  }
 
  // less quantity from cart item 
  function lessQuantityFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
      arr[itemIndex].quantity--;
    setCartItems([...arr]);
  }

  //remove item from the cart
  function removeItemFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  //item cart ma pehlay sa mojod ha ya nahi
  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);

    // item array ma mojod nahi ha
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, lessQuantityFromCart, removeItemFromCart, isItemAdded }}
    >
      {children}
    </CartContext.Provider>
  );
}
