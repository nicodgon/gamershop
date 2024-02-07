import { useEffect, useState } from "react";
import {products} from '../data/products.js'
import { useParams } from "react-router-dom";

export const useFilterList=()=>{
  const [catalogo, setCatalogo] = useState([])
  const {category}=useParams();

  useEffect(()=>{
    category ? setCatalogo(products.filter(prod => prod.category === category)) : setCatalogo(products)
  },[setCatalogo, category])

  return {catalogo, category}
}