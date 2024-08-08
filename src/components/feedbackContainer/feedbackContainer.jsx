import React, { useRef, useState, useEffect } from "react";
import { FeedbackContainerData } from "../../content/listContent.js";
import { FeedbackContainerDisplay } from "./feedbackContainerDisplay";
import style from "./feedbackContainer.module.css";
import { Link } from "react-router-dom";

export const FeedbackContainer = () => {
  const feedbackContainerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateActiveTestimonial = () => {
    feedbackContainerRefs.current.forEach((item, index) => {
      if (item) {
        item.classList.toggle(style.active, index === currentIndex);
      }
    });
  };

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % FeedbackContainerData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + FeedbackContainerData.length) %
        FeedbackContainerData.length
    );
  };

  useEffect(() => {
    updateActiveTestimonial();
  }, [currentIndex]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textTransform: "capitalize" }}>
          what people are saying about us
        </h1>
      </div>
      <div className={style.feedbackContainer}>
        {FeedbackContainerData.map((item, id) => (
          <FeedbackContainerDisplay
            ref={(el) => (feedbackContainerRefs.current[id] = el)}
            key={id}
            user={item.user}
            role={item.role}
            content={item.content}
            rating={item.rating}
            starColor={item.starColor}
          />
        ))}
        <div className={style.buttonContainer}>
          <button onClick={prevTestimonial} className={style.prevButton}>
            <span></span>
          </button>
          <button onClick={nextTestimonial} className={style.nextButton}>
            <span></span>
          </button>
        </div>
        <div className={style.gridWrapper}>
          <Link to={"/testimonials"}>
            <button style={{ backgroundColor: "#000c2f" }}>
              <h2>view all testimonials</h2>
            </button>
          </Link>
          <Link to={"/"}>
            <button style={{ backgroundColor: "#2479c1" }}>
              <h2>leave us a review</h2>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
