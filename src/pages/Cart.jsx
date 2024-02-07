import styles from "./Cart.module.css";
import { useCartContext } from "../hooks/useCartContext";
import CartProduct from "../components/CartProduct";
import Total from "../components/Total";
import { useSweetAlert2 } from "../hooks/useSweetAlert2";

export default function Cart() {
  const { cart, deleteProduct, total, clearCart } = useCartContext();
  const { finalizePurchase } = useSweetAlert2();

  return (
    <section>
      <h1 className={styles.title}>Carrito de compras</h1>
      {cart.length != 0 ? (
        <>
          <Total
            total={total}
            clearCart={clearCart}
            finalizePurchase={finalizePurchase}
          />
          <CartProduct deleteProduct={deleteProduct} cart={cart} />
        </>
      ) : (
        <h3 className={styles.emptyCart}>Carrito de compras vacío</h3>
      )}
    </section>
  );
}
