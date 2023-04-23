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
  getTotal: () => number;
  addQuantity: (operation: boolean, id: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
  resetCart: () => { },
  getTotal: () => 0,
  addQuantity: () => { },
});

export const CartContextProvider = ({ children }: ContextProviderProps) => {

  // array to storages each item that we either add or remove
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  let totalValue: number = 0;

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
    getTotal();
  }, [cartItems]);


  const addToCart = (item: CartItemType) => {

    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.quantity == 0
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const resetCart = () => {
    setCartItems([]);
  }

  const getTotal = () => {
    let total: number = 0;

    cartItems?.map((item) => {
      total = total + ((parseFloat(item.price) - (parseFloat(item.price) * (parseInt(item.discount) / 100))) * item.quantity);
    })

    return total;
  }


  const addQuantity = (operation: boolean, id: number) => {
    if (operation) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id && cartItem.quantity != 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }

  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, resetCart, getTotal, addQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
