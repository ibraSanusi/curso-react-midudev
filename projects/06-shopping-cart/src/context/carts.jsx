import { createContext, useState } from "react";

export const CartsContext = createContext();

export function CartsContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartsContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartsContext.Provider>
  );
}
