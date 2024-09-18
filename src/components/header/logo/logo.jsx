import style from "./logo.module.css";
import navLogoPath from "../../../images/logos/navLogo.png";
import { Link } from "react-router-dom";

export const NavLogo = () => {
  return (
    <Link to="/">
      <img className={style.navLogo} src={navLogoPath} alt="stiberman logo" />
    </Link>
  );
};
