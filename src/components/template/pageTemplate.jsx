import { HomeContentDisplayInfoContainer } from "../../content/home/homeContentDisplay";
import { FeedbackContainer } from "../../content/home/feedbackContainer/feedbackContainer";

import { Hero } from "../hero/hero";
import { VerifiedGoogleTestimonialContainer } from "../../content/home/verifiedGoogleTestiomials/verifiedGoogleTestimonialContainer";
import { DescriptionContainer } from "../../content/home/descriptionContainer/descriptionContainer";

export const TemplatePageHome = () => {
  return (
    <>
      <Hero />
      <HomeContentDisplayInfoContainer />
      <FeedbackContainer />
      <VerifiedGoogleTestimonialContainer />
      <DescriptionContainer />
    </>
  );
};
