import ItemCount from "./ItemCount";
import styles from "./ItemDetail.module.css"
import PropTypes from "prop-types"

export default function ItemDetail ({detail}){
  return(
    <>
    {detail.map(({product, img, id, price, description})=>{
      return(
      <div key={id} className={styles.product}>
        <h3>{product}</h3>
        <img src={img} alt={product} />
        <span>$ {price}</span>
        <p>{description}</p>
        <ItemCount 
        id={id}/>
      </div>
  )})}
    </>
  )
}

ItemDetail.propTypes={
  detail: PropTypes.array,
}