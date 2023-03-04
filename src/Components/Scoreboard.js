import React from "react";
import Score from "./Score/Score";
import Settings from "./Settings/Settings";
import style from "./Scoreboard.module.css";
import { GlobalContext } from "../GlobalContext";

const Scoreboard = () => {
  const { totalDePontosGlobal, equipeUmGlobal, equipeDoisGlobal } =
    React.useContext(GlobalContext);
  const [equipeUm, setEquipeUm] = React.useState(0);
  const [equipeDois, setEquipeDois] = React.useState(0);
  console.log(totalDePontosGlobal, equipeUmGlobal, equipeDoisGlobal);
  return (
    <section className={style.container}>
      <Settings
        equipeUm={equipeUm}
        equipeDois={equipeDois}
        setEquipeUm={setEquipeUm}
        setEquipeDois={setEquipeDois}
      />
      <Score />
    </section>
  );
};

export default Scoreboard;
