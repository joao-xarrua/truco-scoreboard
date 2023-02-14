import React from "react";
import style from "./Display.module.css";
import GameForm from "./GameForm";

const Display = () => {
  return (
    <div className={style.wrap}>
      <h1 className="titulo-1">Contador de truco</h1>
      <span>Um jeito fácil da marcar suas pontuações.</span>
      <GameForm />
    </div>
  );
};

export default Display;
