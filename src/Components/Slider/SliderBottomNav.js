/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./SliderBottomNav.module.css";

const SliderBottomNav = ({ setSlide, slide, slidesList }) => {
  function handleClick({ target }) {
    setSlide(+target.id); // transformar para numero se não irá dar erro
    console.log(target.id);
  }
  return (
    <div className={style.bottomNav}>
      {slidesList.map((item) => {
        if (item.id === slide)
          return (
            <a
              key={item.id}
              id={item.id}
              onClick={handleClick}
              style={{ background: "#4f772d", width: "24px" }}></a>
          );
        return <a key={item.id} id={item.id} onClick={handleClick}></a>;
      })}
    </div>
  );
};

export default SliderBottomNav;
