import cartIcon from "../assets/images/icons/cart.svg";
import { Link } from "react-router-dom";
import styles from './CartWidget.module.css'
import { useCartContext } from "../hooks/useCartContext";

export default function CartWidget() {
  const {counter} = useCartContext()
  return (
    <div className={styles.cartIcon}>
      <Link to='/cart'><img src={cartIcon} alt="cart" /></Link>
      <span>{counter}</span>
    </div>
  );
}
