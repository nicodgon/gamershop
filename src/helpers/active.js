import styles from "../components/NavList.module.css";

export const active = ({ isActive }) => {
  return !isActive ? styles.link : styles.linkActive;
};
