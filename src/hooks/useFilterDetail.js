import { products } from "../data/products.js";
import { useParams } from "react-router-dom";

export const useFilterDetail = () => {
  const { id } = useParams();
  const detail = products.filter((prod) => prod.id === Number(id));
  return { detail };
};
