import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar al carrito o sumar cantidad si ya existe
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + quantity,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    // Notificación con react-toastify
    toast.success(`Agregaste ${quantity} ${product.name || product.title} al carrito`, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Eliminar un producto completo
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Sumar +1 a la cantidad de un ítem en el carrito
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Restar -1 a la cantidad (mínimo 1)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity - 1;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  // Vaciar todo el carrito
  const clearCart = () => setCart([]);

  // Totales calculados dinámicamente
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce((acc, item) => {
    // Limpiamos el precio por si viene como string "$1000" o número
    const numericPrice =
      typeof item.price === "number"
        ? item.price
        : Number(String(item.price).replace(/[^0-9.-]+/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;