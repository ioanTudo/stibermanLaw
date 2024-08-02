import React, { useRef } from "react";
import style from "../navBar/navBar.module.css";

export const BurgerMenu = ({ navRef }) => {
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);

  const MenuClick = () => {
    console.log("Menu Click");
    console.log("navRef:", navRef.current);
    console.log("menuIconRef:", menuIconRef.current);
    console.log("closeIconRef:", closeIconRef.current);
    if (navRef.current && menuIconRef.current && closeIconRef.current) {
      navRef.current.classList.add(style.navVisible);
      menuIconRef.current.classList.add(style.menuHidden);
      closeIconRef.current.classList.add(style.closeVisible);

      menuIconRef.current.classList.remove(style.menuVisible);
      closeIconRef.current.classList.remove(style.closeHidden);
      navRef.current.classList.remove(style.navHidden);
      document.body.style.overflow = "hidden";
    }
  };
  const CloseClick = () => {
    console.log("click");
    if (navRef.current && menuIconRef.current && closeIconRef.current) {
      navRef.current.classList.add(style.navHidden);
      menuIconRef.current.classList.add(style.menuVisible);
      closeIconRef.current.classList.add(style.closeHidden);

      navRef.current.classList.remove(style.navVisible);
      menuIconRef.current.classList.remove(style.menuHidden);
      closeIconRef.current.classList.remove(style.closeVisible);
      document.body.style.overflow = "visible";
    }
  };
  return (
    <>
      <svg
        className={style.menu}
        width="33"
        height="36"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={menuIconRef}
        onClick={MenuClick}
      >
        <path
          d="M0 4.5C0 3.67031 0.670312 3 1.5 3H19.5C20.3297 3 21 3.67031 21 4.5C21 5.32969 20.3297 6 19.5 6H1.5C0.670312 6 0 5.32969 0 4.5ZM0 12C0 11.1703 0.670312 10.5 1.5 10.5H19.5C20.3297 10.5 21 11.1703 21 12C21 12.8297 20.3297 13.5 19.5 13.5H1.5C0.670312 13.5 0 12.8297 0 12ZM21 19.5C21 20.3297 20.3297 21 19.5 21H1.5C0.670312 21 0 20.3297 0 19.5C0 18.6703 0.670312 18 1.5 18H19.5C20.3297 18 21 18.6703 21 19.5Z"
          fill="white"
        />
      </svg>

      <svg
        className={style.close}
        width="33"
        height="36"
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={closeIconRef}
        onClick={CloseClick}
      >
        <g clipPath="url(#clip0_2_236)">
          <path
            d="M18.2424 3.79587C18.7897 3.18493 18.7025 2.27751 18.0438 1.76989C17.385 1.26227 16.4065 1.34313 15.8591 1.95407L9.30048 9.25387L2.74181 1.95407C2.19445 1.34313 1.21598 1.26227 0.557204 1.76989C-0.101569 2.27751 -0.188759 3.18493 0.358604 3.79587L7.28056 11.5L0.358604 19.2041C-0.188759 19.815 -0.101569 20.7224 0.557204 21.23C1.21598 21.7377 2.19445 21.6568 2.74181 21.0459L9.30048 13.7461L15.8591 21.0459C16.4065 21.6568 17.385 21.7377 18.0438 21.23C18.7025 20.7224 18.7897 19.815 18.2424 19.2041L11.3204 11.5L18.2424 3.79587Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_236">
            <rect width="18.6006" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
