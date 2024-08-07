import { FeedbackContainerData } from "../../content/listContent";
import { FeedbackContainerDisplay } from "./feedbackContainerDisplay";
import style from "./feedbackContainer.module.css";
import { useRef, useState } from "react";

export const FeedbackContainer = ({ feedbackDiv }) => {
  const feedbackContainerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % FeedbackContainerData.length;

    setCurrentIndex(newIndex);
    console.log("clicked", newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + FeedbackContainerData.length) %
      FeedbackContainerData.length;
    setCurrentIndex(newIndex);

    console.log("clicked", newIndex);
  };

  return (
    <div className={style.feedbackContainer}>
      {FeedbackContainerData.map((item, id) => (
        <FeedbackContainerDisplay
          ref={(e) => (feedbackContainerRefs.current[id] = e)}
          key={id}
          user={item.user}
          role={item.role}
          text={item.text}
          rating={item.rating}
          starColor={item.starColor}
          content={item.content}
        />
      ))}
      <div className={style.buttonContainer}>
        <button onClick={nextTestimonial} className={style.nextButton}>
          nxt
        </button>
        <button onClick={prevTestimonial} className={style.prevButton}>
          prev
        </button>
      </div>
    </div>
  );
};
