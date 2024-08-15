import style from "./stibermanTestimonial.module.css";

export const StibermanTestimonailDisplay = ({
  user,
  testimonial,
  id,
  role,
  circleLogo,
}) => {
  return (
    <div className={style.gridWrapper} key={id}>
      <div className={style.testimonialContent}>
        <h1 className={style.testimonialContentHeader}>{testimonial}</h1>
        <div className={style.userInfoContainer}>
          <div
            style={{ backgroundImage: `url(${circleLogo})` }}
            className={style.stibermanCircleLogo}
          ></div>
          <div className={style.userInfoText}>
            <h2>{user}</h2>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
