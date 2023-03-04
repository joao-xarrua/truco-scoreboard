import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [jogoAcontecendo, setJogoAcontecendo] = React.useState(() => {
    const localJogoAcontecendo = window.localStorage.getItem("jogoAcontecendo");
    return localJogoAcontecendo === "true" ? true : false;
  });
  const [totalDePontosGlobal, setTotalDePontosGlobal] = React.useState(() => {
    const localTotalDePontos = window.localStorage.getItem("totalDePontos");
    return localTotalDePontos || "null";
  });
  const [equipeUmGlobal, setEquipeUmGlobal] = React.useState(() => {
    const localEquipeUm = window.localStorage.getItem("equipeUm");
    return localEquipeUm || "null";
  });
  const [equipeDoisGlobal, setEquipeDoisGlobal] = React.useState(() => {
    const localEquipeDois = window.localStorage.getItem("equipeDois");
    return localEquipeDois || "null";
  });

  React.useEffect(() => {
    window.localStorage.setItem("jogoAcontecendo", jogoAcontecendo);
    window.localStorage.setItem("totalDePontos", totalDePontosGlobal);
    window.localStorage.setItem("equipeUm", equipeUmGlobal);
    window.localStorage.setItem("equipeDois", equipeDoisGlobal);
  }, [jogoAcontecendo, totalDePontosGlobal, equipeUmGlobal, equipeDoisGlobal]);

  return (
    <GlobalContext.Provider
      value={{
        jogoAcontecendo,
        totalDePontosGlobal,
        equipeUmGlobal,
        equipeDoisGlobal,
        setJogoAcontecendo,
        setTotalDePontosGlobal,
        setEquipeUmGlobal,
        setEquipeDoisGlobal,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
