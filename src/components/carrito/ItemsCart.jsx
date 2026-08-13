
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Styles from "../modulesCSS/Carrito/ItemsCart.module.css";

function ItemsCart() {

  const navigate = useNavigate();
  const {
    cart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  // VISTA DE CARRITO VACÍO
  if (cart.length === 0) {
    return (
      <div className={Styles.container}>
        <h2 className={Styles.titulo}>Mi Carrito</h2>
        <p>No hay ningún producto en el carrito.</p>
        <Link to="/">
          <button className={Styles.btnAddCart}>Ir a ver productos</button>
        </Link>
      </div>
    );
  }

  // VISTA CON PRODUCTOS
  return (
    <div className={Styles.container}>
      <h2 className={Styles.titulo}>Mi Carrito</h2>

      {/* Recorremos dinámicamente cada producto agregado */}
      {cart.map((prod) => (
        <div key={prod.id} className={Styles.containerItem}>
          <div className={Styles.containerImg}>
            <img className={Styles.image} src={prod.image} alt={prod.name} />
          </div>

          <div className={Styles.containerDescription}>
            <p><strong>{prod.name}</strong></p>
            <p>{Array.isArray(prod.category) ? prod.category.join(", ") : prod.category}</p>
            <p>${prod.price}</p>

            {/* Control de cantidad individual para este ítem */}
            <div className={Styles.containerBtnCant}>
              <button className={`${Styles.btnG} ${Styles.btnCant}`} onClick={() => decreaseQuantity(prod.id)}>-</button>
              <p>Cantidad: {prod.quantity}</p>
              <button className={`${Styles.btnG} ${Styles.btnCant}`} onClick={() => increaseQuantity(prod.id)}>+</button>
            </div>

            {/* Eliminar este producto */}
            <button
              className={`${Styles.btnD} ${Styles.btnG}`}
              onClick={() => removeItem(prod.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      {/* RESUMEN TOTAL DE LA COMPRA */}
      <div className={Styles.containerResumen}>
        <h4 className={Styles.resumen}>Resumen</h4>
        <p>Cantidad de productos totales: {totalItems}</p>
        <p>Sub Total: ${totalPrice}</p>
        <p>Total a pagar: ${totalPrice}</p>
        <button className={Styles.btnAddCart} onClick={() => navigate("/checkOut")}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}

export default ItemsCart;