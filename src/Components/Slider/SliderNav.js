import React from "react";
import style from "./SliderNav.module.css";

const SliderNav = ({ setSlide, slide, slidesList }) => {
  function handlePrev() {
    if (slide > 0) {
      setSlide(slide - 1);
    } else {
      setSlide(slidesList.length - 1);
    }
  }

  function handleNext() {
    if (slide < slidesList.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  }

  return (
    <div className={style.navigation}>
      <a onClick={handlePrev} className={style.prev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24">
          <path
            fill="#eee"
            d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z"
          />
        </svg>
      </a>
      <a onClick={handleNext} className={style.next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24">
          <path
            fill="#eee"
            d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SliderNav;
