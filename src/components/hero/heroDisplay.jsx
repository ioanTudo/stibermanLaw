import style from "./hero.module.css";

export const HeroDisplay = ({ idHero, pageHero }) => {
  return (
    <div
      className={style.homepageHeroStyle}
      key={idHero}
      style={{ backgroundImage: `url(${pageHero})` }}
    ></div>
  );
};
