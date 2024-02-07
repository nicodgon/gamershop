import { Link } from "react-router-dom";
import styles from "./Item.module.css"
import PropTypes from "prop-types"

export default function Item({ product, description, img, id }) {
  return (
    <div key={id} className={styles.product}>
      <h3>{description}</h3>
      <img src={img} alt={product} />
      <Link to={`/item/${id}`}>
        <button className={styles.btnProd}>Ver detalles del producto</button>
      </Link>
    </div>
  );
}

Item.propTypes={
  product: PropTypes.node,
  img: PropTypes.node,
  description: PropTypes.node,
  id: PropTypes.node,
}