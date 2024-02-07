import styles from "./ItemCount.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartAndCounter } from "../hooks/useCartAndCounter";

export default function ItemCount({ id }) {
  const { handleChange, cartAndCounter } = useCartAndCounter();

  return (
    <section className={styles.container}>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <input
          className={styles.inp}
          type="number"
          defaultValue={1}
          min={1}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={styles.btnProd}
          onClick={() => cartAndCounter(id)}
        >
          Agregar al carrito
        </button>
      </form>
      <div>
        <Link to="/">
          <button className={styles.btnProd}>Volver</button>
        </Link>
        <Link to={"/cart"}>
          <button type="submit" className={styles.btnProd}>
            Ir al carrito
          </button>
        </Link>
      </div>
    </section>
  );
}

ItemCount.propTypes = {
  id: PropTypes.node,
};
