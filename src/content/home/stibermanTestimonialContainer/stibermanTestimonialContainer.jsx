import { StibermanTestimonialData } from "../../listContent";
import { StibermanTestimonailDisplay } from "./stibermanTestimonialDisplay";

export const StibermanTestimonialContainer = () => {
  return (
    <>
      {StibermanTestimonialData.map((data) => (
        <StibermanTestimonailDisplay
          role={data.role}
          testimonial={data.testimonial}
          user={data.user}
          key={data.id}
          circleLogo={data.circleLogo}
        />
      ))}
    </>
  );
};
