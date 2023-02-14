import React from "react";
import style from "./SliderItem.module.css";

const SliderItem = ({ slide, slidesList }) => {
  return (
    <ul className={style.slider}>
      {slidesList.map((item) => {
        return (
          <li
            key={item.id}
            className={style.item}
            style={{ transform: `translateX(-${slide * 100}%)` }}>
            <p className={style.content}>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderItem;
