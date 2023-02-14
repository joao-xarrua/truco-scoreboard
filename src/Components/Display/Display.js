import React from "react";
import style from "./Display.module.css";
import DisplayForm from "./DisplayForm";

const Display = () => {
  return (
    <div className={style.wrap}>
      <h1 className="titulo-1">Contador de truco</h1>
      <span className={style.subtitle}>
        Um jeito fácil da marcar suas pontuações
      </span>
      <DisplayForm />
    </div>
  );
};

export default Display;
