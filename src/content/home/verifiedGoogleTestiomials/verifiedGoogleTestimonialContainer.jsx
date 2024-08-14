import { VerifiedGoogleTestimonialsContainerDisplay } from "./verifiedGoogleTestimoialsDisplay";
import { VerifiedGoogleTestimonialsData } from "../../listContent";
import style from "./verifiedGoogleContainer.module.css";

export const VerifiedGoogleTestimonialContainer = () => {
  return (
    <div className={style.verifiedGoogleWrapper}>
      {VerifiedGoogleTestimonialsData.map((data) => (
        <VerifiedGoogleTestimonialsContainerDisplay
          key={data.id}
          content={data.content}
          reviewCountText={data.reviewCountText}
          googleVerifiedImg={data.googleVerifiedImg}
        />
      ))}
    </div>
  );
};
