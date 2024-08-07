import { NavLink } from "react-router-dom";
import { NavList } from "../../content/listContent";
import style from "./navBar.module.css";
import { useState, useEffect } from "react";

export const NavBar = ({ navRef }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (id) => {
    setSelectedIndex(id);
  };

  useEffect(() => {
    console.log("Current page ID:", selectedIndex);
  }, [selectedIndex]);

  return (
    <nav ref={navRef} className={style.nav}>
      <ul className={style.navUl}>
        {NavList.map((navItem) => (
          <li
            className={`${style.navLi} ${
              selectedIndex === navItem.id ? style.active : ""
            }`}
            key={navItem.id}
          >
            <NavLink
              onClick={() => handleClick(navItem.id)}
              to={navItem.path}
              className={({ isActive }) =>
                isActive ? style.activeLink : undefined
              }
            >
              {navItem.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
