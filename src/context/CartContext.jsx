import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe usarse dentro de un CartProvider"
    );
  }

  return context;
};

export const CartProvider = ({ children }) => {

  const navigate = useNavigate(); 

  const [cart, setCart] = useState([]);

  // SOME evalua la existencia y retorna true o false
  const isInCart = (item) => {

    const inCart = cart.some(
      element => element.id === item.id);

    return inCart;
  };

  const clearCart = () => {
    setCart([]);
  };

  const addItem = (item) => {

    if (isInCart(item)) {
      alert("El producto ya existe en el carrito");
      return;
    }

    setCart([...cart, item]);

    alert("Producto agregado");
  };

    const removeItem = (id) => {

    const updatedCart = cart.filter(
      element => element.id !== id
    );

    setCart(updatedCart);

    alert("Producto eliminado");
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getCartTotal = () => {

    return cart.reduce(

      (acc, element) => acc + element.price,0);
  };

  const checkOut = () => {

    alert("Su compra ha sido realizada con éxito");

    clearCart();

    navigate("/");
  };

  const values = {cart,checkOut,getCartTotal,getTotalItems,removeItem, addItem, clearCart};
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;

   
 
};