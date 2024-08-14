import { Link } from "react-router-dom";
import style from "./verifiedGoogleContainer.module.css";

export const VerifiedGoogleTestimonialsContainerDisplay = ({
  content,
  reviewCountText,
  googleVerifiedImg,
  id,
}) => {
  return (
    <div className={style.verifiedGoogleContentWrapper} key={id}>
      <div className={style.contentContainer}>
        <img key={id} src={googleVerifiedImg} alt="google verified logo" />
        <h2 className={style.subHeadingCounter} key={id}>
          {reviewCountText}
        </h2>
        <p key={id}>{content}</p>
        <Link to={"/"}>
          <button>view reviews</button>
        </Link>
      </div>
    </div>
  );
};
