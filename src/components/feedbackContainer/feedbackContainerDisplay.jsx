import React, { forwardRef } from "react";
import style from "./feedbackContainer.module.css";
import "../../content/listContent";
import googleminiLogo from "../../images/logos/googleMiniLogo.png";

export const FeedbackContainerDisplay = forwardRef(
  ({ user, content, rating, starColor }, ref) => {
    const starsRating = Array(rating)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className="fa fa-star"
          style={{ color: starColor }}
        ></span>
      ));

    return (
      <>
        <div ref={ref} className={style.wrapper}>
          <div className={style.feedbackContentContainer}>
            <div className={style.flexWrapper}>
              <span>{starsRating}</span>
              <img src={googleminiLogo} alt="" />
            </div>
            <div className={style.contentDiv}>
              <p>{content}</p>
            </div>

            <div className={style.userInfo}>
              <h3
                style={{ textTransform: "uppercase" }}
                className={style.userHeader}
              >
                {user}
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
);
