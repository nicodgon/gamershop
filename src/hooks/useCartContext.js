import { useContext } from "react";
import { cartContext } from "../helpers/cartContext";

export function useCartContext() {
  return useContext(cartContext);
}
