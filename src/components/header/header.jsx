import { BurgerMenu } from "../burgerMenu/burgerMenu";
import { NavBar } from "../navBar/navBar";
import style from "./header.module.css";
import { NavLogo } from "./logo/logo";
import { PhoneImgNav } from "./phone/phoneNavImg";

export const Header = ({ navRef }) => {
  return (
    <header className={style.header}>
      <NavLogo />
      <PhoneImgNav />
      <NavBar navRef={navRef} />
      <BurgerMenu navRef={navRef} />
    </header>
  );
};
