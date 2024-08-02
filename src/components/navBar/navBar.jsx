import { NavLink } from "react-router-dom";
import { NavList } from "../../content/listContent";
import style from "./navBar.module.css";
import { useRef } from "react";

export const NavBar = ({ navRef }) => {
  return (
    <nav ref={navRef} className={style.nav}>
      <ul className={style.navUl}>
        {NavList.map((navItem) => (
          <li className={style.navLi} key={navItem.id}>
            <NavLink to={navItem.path}>{navItem.content}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
