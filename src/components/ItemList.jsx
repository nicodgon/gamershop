import Item from "./Item"
import styles from "./ItemList.module.css"
import PropTypes from "prop-types"

export default function ItemList ({catalogo}){
  return (
    <div className={styles.containerProducts}>
      {catalogo.map(({ product, img, description, id }) => 
          <Item key={id} product={product} img={img} description={description} id={id}/>
        )}
    </div>
  )
}

ItemList.propTypes={
  catalogo: PropTypes.array,
}