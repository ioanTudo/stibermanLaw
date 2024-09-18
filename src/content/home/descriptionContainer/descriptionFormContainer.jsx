import { DescriptionFormData } from "../../listContent";
import { DescriptionFormDisplay } from "./descriptionForm";

export const DescriptionForm = () => {
  return (
    <>
      {DescriptionFormData.map((data) => (
        <DescriptionFormDisplay
          headingForm={data.headingForm}
          subHeadingForm={data.subHeadingForm}
        />
      ))}
    </>
  );
};
