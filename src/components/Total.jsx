import styles from "./Total.module.css"
import PropTypes from "prop-types"

export default function Cart({total,clearCart,finalizePurchase}) {
  const buy = () => {
    clearCart();
    finalizePurchase();
  };

  return (
    <div className={styles.totalContainer}>
      <span className={styles.totalPrice}>Total: ${total}</span>
      <button className={styles.buyBtn} onClick={buy}>
        Finalizar mi compra
      </button>
    </div>
  );
}

Cart.propTypes={
  total: PropTypes.node,
  clearCart: PropTypes.func,
  finalizePurchase: PropTypes.func,
}