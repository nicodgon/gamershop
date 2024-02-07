import { NavLink } from "react-router-dom";
import { active } from "../helpers/active";
import PropTypes from "prop-types"
import styles from "./NavList.module.css"

export default function NavList({navBarCategories,list}){
  return(
    <ol className={list}>
      {navBarCategories.map((categ)=>{
        return(
            <li className={styles.li} key={categ}>
              <NavLink className={active} to={`/category/${categ}`}>{categ}</NavLink>
            </li>
        )
      })}
    </ol>
  )
}

NavList.propTypes={
  navBarCategories: PropTypes.node,
  list: PropTypes.node,
}