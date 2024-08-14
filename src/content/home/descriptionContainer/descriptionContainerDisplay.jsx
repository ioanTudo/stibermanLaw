import React, { useEffect, useRef } from "react";
import style from "./descriptionContainer.module.css";
import descriptionBanner from "../../../images/banners/descriptionImg.png";
import { DescriptionFormDisplay } from "./descriptionForm";
import { DescriptionFormData } from "../../listContent";

export const DescriptionContainerDisplay = ({
  content1,
  content2,
  content3,
  heading,
  subHeading,
  id,
  isButton,
  displayImg,
  isHeadingBlue,
  displayForm,
}) => {
  const btnRef = useRef(null);
  const bannerRef = useRef(null);
  const headingBlueRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      if (isButton) {
        btnRef.current.classList.add(style.displayBlockButton);
      } else {
        btnRef.current.classList.add(style.displayNoneButton);
      }
    }
  }, [isButton]);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.style.display = displayImg ? "block" : "none";
    }
  }, [displayImg]);

  useEffect(() => {
    if (headingBlueRef.current) {
      headingBlueRef.current.style.color = isHeadingBlue ? "#2479c1" : "black";
    }
  }, [isHeadingBlue]);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.display = displayForm ? "block" : "none";
    }
  }, [formRef]);

  return (
    <div className={style.descriptionContentContainer} key={id}>
      <h1 ref={headingBlueRef}>{heading}</h1>
      <h2>{subHeading}</h2>
      <p>{content1}</p>
      <button ref={btnRef}>Free Consultation</button>
      <p>{content2}</p>
      <img
        className={style.descriptionBanner}
        ref={bannerRef}
        src={descriptionBanner}
        alt="Description Banner"
      />
      <p>{content3}</p>
      <div className={style.descriptionFormContainer}>
        {DescriptionFormData.map((data, index) => (
          <DescriptionFormDisplay
            ref={formRef}
            key={index}
            headingForm={data.headingForm}
            subHeadingForm={data.subHeadingForm}
          />
        ))}
      </div>
    </div>
  );
};
