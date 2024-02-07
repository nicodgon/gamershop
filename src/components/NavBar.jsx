import logo from "../assets/images/icons/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {products} from '../data/products.js';
import styles from './NavBar.module.css'
import { useEffect, useState } from "react";
import { useExpand } from "../hooks/useExpand.js";
import hamburgerMenu from "../assets/images/icons/menu.svg"
import NavList from "./NavList.jsx";

export default function NavBar(){
  const [navBarCategories,setNavBarCategories] = useState([])
  const {list,expand} = useExpand()
  useEffect(()=>{
    const categories = products.map(prod => prod.category)
    const catNav = new Set(categories)
    const arrayCatNav = [...catNav]
    setNavBarCategories(arrayCatNav)
  },[setNavBarCategories])

  return (
    <header>
      <nav className={styles.navContainer}>
        <Link to='/'><img src={logo} alt="logo" className={styles.logo} /></Link>
        <NavList navBarCategories={navBarCategories} list={list}/>
        <CartWidget/>
        <button onClick={expand} className={styles.btnMenu}>
          <img src={hamburgerMenu} alt="menú" className={styles.hamburgerMenu} />
        </button>
      </nav>
    </header>
  );
}