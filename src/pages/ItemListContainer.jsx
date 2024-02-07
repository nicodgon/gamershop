import styles from "./ItemListContainer.module.css";
import ItemList from "../components/ItemList.jsx";
import { useFilterList } from "../hooks/useFilterList.js";

export default function ItemListContainer() {
  const { catalogo, category } = useFilterList();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {category ? category : "Todos los productos"}
      </h1>
      <ItemList catalogo={catalogo} />
    </section>
  );
}
