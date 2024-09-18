import { HomePageContent } from "../listContent";
import style from "./homeContent.module.css";

export const HomeContentDisplayInfoContainer = () => {
  return HomePageContent.map((data) => (
    <div key={data.key} className={style.gridWrapper}>
      <h1 key={data.key}>{data.heading}</h1>
      <h2 key={data.key}>{data.subHeading}</h2>
      <div className={style.buttonContainer}>
        <div className={style.consultationButton} key={data.key}>
          free consultation <span className={style.rightArrow}></span>
        </div>
      </div>
      <div className={style.flexWrapper}>
        <div
          key={data.key}
          className={style.certifiedLogoSize}
          style={{ backgroundImage: `url(${data.certifiedLogo1})` }}
        ></div>
        <div
          key={data.key}
          className={style.certifiedLogoSize}
          style={{ backgroundImage: `url(${data.certifiedLogo2})` }}
        ></div>
      </div>
    </div>
  ));
};
