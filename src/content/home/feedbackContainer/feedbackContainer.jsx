import React, { useRef, useState, useEffect } from "react";
import { FeedbackContainerData } from "../../listContent.js";
import { FeedbackContainerDisplay } from "./feedbackContainerDisplay.jsx";
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
    <div className={style.feedbackContainerWrapper}>
      <div style={{ textAlign: "center" }}>
        <h1
          className={style.headerFeedback}
          style={{ textTransform: "capitalize" }}
        >
          what people are <span style={{ color: "#2479c1" }}>saying</span> about
          us
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
              view all testimonials
            </button>
          </Link>
          <Link to={"/"}>
            <button style={{ backgroundColor: "#2479c1" }}>
              leave us a review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
