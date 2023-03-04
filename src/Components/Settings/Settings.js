import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import style from "./Settings.module.css";

const Settings = () => {
  const { setJogoAcontecendo } = React.useContext(GlobalContext);
  const [quantidadeDePontos, setQuantidadeDePontos] = React.useState(1);
  const navigate = useNavigate();

  const valoresDePontos = [1, 3, 6, 9, 12];

  function handleSair() {
    setJogoAcontecendo(false);
    navigate("/");
  }

  function handleChangeQuantidade({ target }) {
    setQuantidadeDePontos(Number(target.innerText));
  }

  return (
    <div className={style.wrap}>
      <div className={style.interface}>
        <div className={style.navegacaoTopo}>
          <button onClick={handleSair}>&#60;&#60; Sair</button>
          <button>? Infos</button>
        </div>
        <div className={style.valores}>
          <h2>Quantidade de pontos</h2>
          <ul>
            {valoresDePontos.map((valor) => {
              return (
                <li key={valor}>
                  <button
                    onClick={handleChangeQuantidade}
                    className={quantidadeDePontos === valor ? style.ativo : ""}>
                    {valor}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.adicionaPontos}>
          <h2>Adicionar pontos</h2>
          <div className={style.botoesPontos}>
            <button>1</button>
            <button>2</button>
          </div>
        </div>
        <div className={style.navegacaoBase}></div>
      </div>
    </div>
  );
};

export default Settings;
