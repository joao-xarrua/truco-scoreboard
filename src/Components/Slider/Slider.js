import React from "react";
import style from "./Slider.module.css";
import SliderNav from "./SliderNav";
import SliderItem from "./SliderItem";
import SliderBottomNav from "./SliderBottomNav";

const slidesList = [
  {
    id: 0,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maurisnibh, placerat nec elit a.",
  },
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maurisnibh, placerat nec elit a, viverra vulputate odio. Sed venenatislacus ut elit bibendum malesuada.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc mauris nibh, placerat nec elit a,viverra vulputate odio. Sed venenatis lacus ut elit bibendummalesuada.",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maurisnibh, placerat nec elit a, viverra vulputate odio. Sed venenatislacus ut elit bibendum malesuada.Lorem ipsum dolor sit",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maurisnibh, placerat nec elit a, viverra vulputate odio. Sed venenatislacus ut elit bibendum malesuada.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc mauris nibh, placerat nec elit a,viverra vulputate odio. Sed venenatis lacus ut elit bibendummalesuada. amet,consectetur adipiscing elit. Nunc mauris nibh, placerat nec elit a,viverra vulputate odio. Sed venenatis lacus ut elit bibendummalesuada.",
  },
];

const Slider = () => {
  const [slide, setSlide] = React.useState(0);

  return (
    <div className={style.wrap}>
      <div className={style.interface}>
        <h2 className="titulo-2">Como utilizar?</h2>
        <SliderNav setSlide={setSlide} slide={slide} slidesList={slidesList} />
        <SliderBottomNav
          setSlide={setSlide}
          slide={slide}
          slidesList={slidesList}
        />
      </div>
      <SliderItem slide={slide} slidesList={slidesList} />
    </div>
  );
};

export default Slider;
