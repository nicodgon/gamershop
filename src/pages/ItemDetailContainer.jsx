import ItemDetail from "../components/ItemDetail";
import styles from "./ItemDetailContainer.module.css";
import { useFilterDetail } from "../hooks/useFilterDetail";

export default function ItemDetailContainer() {
  const { detail } = useFilterDetail();
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Detalle del producto</h1>
      <ItemDetail detail={detail} />
    </section>
  );
}
