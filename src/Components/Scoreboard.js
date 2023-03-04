import React from "react";
import Score from "./Score/Score";
import Settings from "./Settings/Settings";
import style from "./Scoreboard.module.css";
import { GlobalContext } from "../GlobalContext";

const Scoreboard = () => {
  const { totalDePontosGlobal, equipeUmGlobal, equipeDoisGlobal } =
    React.useContext(GlobalContext);
  console.log(totalDePontosGlobal, equipeUmGlobal, equipeDoisGlobal);
  return (
    <section className={style.container}>
      <Settings />
      <Score />
    </section>
  );
};

export default Scoreboard;
