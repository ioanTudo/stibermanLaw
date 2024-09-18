import React, { forwardRef } from "react";
import style from "./descriptionContainer.module.css";

export const DescriptionFormDisplay = forwardRef(
  ({ headingForm, subHeadingForm }, ref) => {
    return (
      <div className={style.descriptionFormContent} ref={ref}>
        <h1>{headingForm}</h1>
        <h2>{subHeadingForm}</h2>
        <div className={style.inputContainer}>
          <input type="text" value={"first name"} />
          <input type="text" value={"last name"} />
          <input type="text" value={"phone number"} />
          <input type="text" value={"email adress"} />
          <textarea value={"how can we help you?"}></textarea>
          <button>get free consultation</button>
        </div>
      </div>
    );
  }
);
