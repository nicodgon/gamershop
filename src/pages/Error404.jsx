import styles from "./Error404.module.css";

export default function Error404() {
  return (
    <section className={styles.containerError}>
      <h3>Error 404</h3>
      <p>Not found</p>
    </section>
  );
}
