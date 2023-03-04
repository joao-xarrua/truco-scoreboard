import React from "react";
import Slider from "./Slider/Slider";
import Display from "./Display/Display";
import style from "./Panel.module.css";

const Panel = () => {
  return (
    <section className={style.container}>
      <Slider />
      <Display />
    </section>
  );
};

export default Panel;
