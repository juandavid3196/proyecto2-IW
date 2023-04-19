import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CartItemType {
  id: number;
  img: string;
  price: string;
  discount: string;
  message: string;
  value: boolean;
  quantity: number;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  resetCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
  resetCart: () => { }
});

export const CartContextProvider = ({ children }: ContextProviderProps) => {

  // array to storages each item that we either add or remove
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  //update the items array each that is loaded the page

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // save carItems each cartItems is updates

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (item: CartItemType) => {

    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems,item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const resetCart = () => {
    setCartItems([]);
  }

  //return total products prices

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
