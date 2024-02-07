import { useState } from "react";
import {useCartContext} from "./useCartContext"

export const useCartAndCounter = () => {
  const [addedQuantity, setAddedQuantity] = useState(1);
  const { manageCart, increase } = useCartContext()

  const handleChange = (Event) => {
    setAddedQuantity(Event.target.value);
  };
  
  const cartAndCounter=(id)=>{
    manageCart(id,addedQuantity)
    increase(addedQuantity)
  }

  return { handleChange, cartAndCounter };
};
