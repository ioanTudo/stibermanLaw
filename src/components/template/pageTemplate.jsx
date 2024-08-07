import { HomeContentDisplayInfoContainer } from "../../content/home/homeContentDisplay";
import { FeedbackContainer } from "../feedbackContainer/feedbackContainer";

import { Hero } from "../hero/hero";

export const TemplatePageHome = () => {
  return (
    <>
      <Hero />
      <HomeContentDisplayInfoContainer />
      <FeedbackContainer />
    </>
  );
};
