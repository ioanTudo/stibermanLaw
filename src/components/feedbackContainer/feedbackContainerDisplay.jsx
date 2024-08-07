import { useRef } from "react";
import style from "./feedbackContainer.module.css";

export const FeedbackContainerDisplay = ({
  rating,
  id,
  content,
  user,
  starColor,
}) => {
  const feedbackDiv = useRef(null);

  const starsRating = Array(rating)
    .fill(0)
    .map((_, id) => <span key={id} className="fa fa-star "></span>);
  return (
    <div className={style.wrapper}>
      <div
        className={style.feedbackContentContainer}
        ref={feedbackDiv}
        key={id}
      >
        <span style={{ color: starColor }} key={id}>
          {starsRating}
        </span>
        <p key={id}>{content}</p>

        <div className={style.userFeedbackName}>
          <h1 key={id}>{user}</h1>
        </div>
      </div>
    </div>
  );
};
