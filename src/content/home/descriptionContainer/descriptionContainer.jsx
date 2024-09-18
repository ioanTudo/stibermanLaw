import { DescriptionContainerData } from "../../listContent";
import { DescriptionContainerDisplay } from "./descriptionContainerDisplay";

import style from "./descriptionContainer.module.css";

export const DescriptionContainer = () => {
  return (
    <div className={style.descriptionContainer}>
      {DescriptionContainerData.map((data) => (
        <DescriptionContainerDisplay
          content1={data.content1}
          content2={data.content2}
          content3={data.content3}
          key={data.id}
          heading={data.heading}
          subHeading={data.subHeading}
          isButton={data.isButton}
          displayImg={data.displayImg}
          displayForm={data.displayForm}
          subHeadingForm={data.subHeadingForm}
          headingForm={data.headingForm}
          isHeadingBlue={data.isHeadingBlue}
        />
      ))}
    </div>
  );
};
