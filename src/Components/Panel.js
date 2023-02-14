import React from "react";
import Slider from "./Slider/Slider";
import style from "./Panel.module.css";
import Display from "./Display/Display";

const Panel = () => {
  return (
    <section className={style.container}>
      <Slider />
      <Display />
    </section>
  );
};

export default Panel;
