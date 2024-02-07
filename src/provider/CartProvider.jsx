import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { cartContext } from "../helpers/cartContext.js";
import { products } from "../data/products.js";

export function CartProvider({ children }) {
  //Array del carrito
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //Contador del icono carrito
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [cart, counter]);

  //Calcular el precio total de la compra
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  //Agregar producto o su cantidad al carrito
  const manageCart = (id, addedQuantity) => {
    // Busco si existe en el cart un producto con el mismo id
    const filterCart = cart.some((prod) => prod.id == id);
    // Si no existe un producto con el id recibido lo agrego al carrito
    if (!filterCart) {
      // Busco en el array de productos el producto con el mismo id que el recibido y lo agrego al carrito con la cantidad recibida
      const filterProducts = products.filter((prod) => prod.id == id);
      filterProducts[0].quantity = Number(addedQuantity);
      const newCart = [...cart, ...filterProducts];
      setCart(newCart);
    } else {
      // Si existe un producto con el id recibido le sumo la cantidad recibida
      const index = cart.findIndex((prod) => prod.id === id);
      cart[index].quantity += Number(addedQuantity);
    }
  };

  //incrementar el contador
  const increase = (addedQuantity) => {
    setCounter((prevCounter) => prevCounter + Number(addedQuantity));
  };

  //Eliminar un producto del carrito y descontar su cantidad del contador
  const deleteProduct = (id) => {
    const index = cart.findIndex((prod) => prod.id == id);
    setCounter(counter - cart[index].quantity);
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newCart);
  };

  //Borrar carrito completo y guardarlo en el localStore
  const clearCart = () => {
    setCart([]);
    setCounter(0);
  };

  return (
    <cartContext.Provider
      value={{
        counter,
        increase,
        manageCart,
        cart,
        total,
        deleteProduct,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
