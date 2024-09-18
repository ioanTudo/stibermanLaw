import { Link } from "react-router-dom";
import phoneNavImg from "../../../images/logos/phoneLogoNav.png";
import style from "./phoneNav.module.css";

export const PhoneImgNav = () => {
  return (
    <Link className={style.phoneLink}>
      <img className={style.phoneImg} src={phoneNavImg} alt="phone logo" />
    </Link>
  );
};
