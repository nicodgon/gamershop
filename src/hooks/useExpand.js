import styles from "../components/NavList.module.css";
import { useState } from "react";

export const useExpand = () => {
  const [list, setList] = useState(styles.categContainer);
  const expand = () => {
    list == styles.categContainer
      ? setList(styles.categContainerResponsive)
      : setList(styles.categContainer);
  };
  return { list, expand };
};
