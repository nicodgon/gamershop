import styles from "./CartProduct.module.css"
import trash from "../assets/images/icons/trash.svg"
import PropTypes from "prop-types"

export default function CartProduct({deleteProduct,cart}){
  return(
    <ol className={styles.list}>
      {cart.map(({id,product,img,price,quantity})=>{
        return(
          <li key={id} className={styles.prodContainer}>
            <img className={styles.prodimage} src={img} alt={product} />
            <div className={styles.info}>
              <h3>{product}</h3>
              <span>${price}</span>
              <span>cantidad: {quantity}</span>
            </div>
            <img className={styles.trashIcon} src={trash} onClick={()=>deleteProduct(id)} alt="basura" />
          </li>
        )
      })}
    </ol>
  )
}

CartProduct.propTypes={
  deleteProduct: PropTypes.func,
  cart: PropTypes.array,
}