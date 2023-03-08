import React from "react";
import { GlobalContext } from "../../GlobalContext";
import style from "./Score.module.css";

const Score = ({ equipeUm, equipeDois }) => {
  const { equipeUmGlobal, equipeDoisGlobal, totalDePontosGlobal } =
    React.useContext(GlobalContext);

  return (
    <div className={style.wrap}>
      <h1 className="titulo-1">Placar</h1>
      <div className={style.cabecalho}>
        <div className={style.equipeUm}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#333333"
            />
            <path
              d="M38.5 36.5L38.5 40.423V38.5L38.5 36.5L36 38.5L38 44L37.5 47.5L37 51L36 38.5L38.5 36.5ZM35.2187 60.0417V40.423L31.0979 43.3792L29.0375 40.2438L36.3833 34.9584H39.25V60.0417H35.2187Z"
              fill="#eee"
            />
          </svg>
          <span className={style.tituloEquipe}>{equipeUmGlobal}</span>
          <span className={`${style.vencendoEquipeUm} ${style.vencendo}`}>
            vencendo
          </span>
        </div>
        <div className={style.final}>
          <h3>final</h3>
          <span>{totalDePontosGlobal}</span>
        </div>
        <div className={style.equipeDois}>
          <span className={style.tituloEquipe}>{equipeDoisGlobal}</span>
          <svg
            width="48"
            height="48"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#333333"
            />
            <path
              d="M31.5 55.5L35 51.5L36 50.5L38 49L39.1993 47.8141L39.775 46.6869L41.5 44.5L41.5483 46L41 48L38.5 50.5L34.5 54L31.5 58L31.5 55.5ZM28.6709 60.4583V56.8708L37.2125 48.1583C38.1521 47.1618 38.8144 46.3287 39.1993 45.659C39.5831 44.9905 39.775 44.2291 39.775 43.375C39.775 42.5493 39.455 41.8016 38.8149 41.1319C38.1738 40.4634 37.2125 40.1291 35.9313 40.1291C34.9063 40.1291 34.0595 40.4138 33.391 40.9833C32.7213 41.5527 32.2584 42.293 32.0021 43.2041L28.5854 41.8375C28.9841 40.5562 29.8098 39.353 31.0625 38.2278C32.3153 37.1037 33.9667 36.5416 36.0167 36.5416C38.3799 36.5416 40.2238 37.2181 41.5483 38.5711C42.8717 39.923 43.5334 41.5243 43.5334 43.375C43.5334 44.6562 43.2344 45.8236 42.6365 46.877C42.0386 47.9305 41.1132 49.0979 39.8604 50.3791L33.625 56.8708L33.7104 57.0416H43.875V60.4583H28.6709Z"
              fill="white"
            />
          </svg>
          <span className={style.perdendo}>perdendo</span>
        </div>
      </div>
      <div className={style.pontos}>
        <span>{equipeUm}</span>
        <div className={style.separador}></div>
        <span>{equipeDois}</span>
      </div>
      <div className={style.historico}>
        <h3>Histórico</h3>
        <div className={style.historicoPontos}>
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#eee"
            />
            <path
              d="M38.5 36.5L38.5 40.423V38.5L38.5 36.5L36 38.5L38 44L37.5 47.5L37 51L36 38.5L38.5 36.5ZM35.2187 60.0417V40.423L31.0979 43.3792L29.0375 40.2438L36.3833 34.9584H39.25V60.0417H35.2187Z"
              fill="#333"
            />
          </svg>
          <svg
            width="56"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#aaa"
            />
            <path
              d="M38.5 36.5L38.5 40.423V38.5L38.5 36.5L36 38.5L38 44L37.5 47.5L37 51L36 38.5L38.5 36.5ZM35.2187 60.0417V40.423L31.0979 43.3792L29.0375 40.2438L36.3833 34.9584H39.25V60.0417H35.2187Z"
              fill="#333"
            />
          </svg>
          <svg
            width="56"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#aaa"
            />
            <path
              d="M38.5 36.5L38.5 40.423V38.5L38.5 36.5L36 38.5L38 44L37.5 47.5L37 51L36 38.5L38.5 36.5ZM35.2187 60.0417V40.423L31.0979 43.3792L29.0375 40.2438L36.3833 34.9584H39.25V60.0417H35.2187Z"
              fill="#333"
            />
          </svg>
          <svg
            width="56"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 39.3751C18.0038 39.6716 17.9482 39.9658 17.8365 40.2405C17.7247 40.5152 17.5591 40.7648 17.3494 40.9745C17.1397 41.1841 16.8902 41.3497 16.6155 41.4615C16.3408 41.5732 16.0465 41.6288 15.75 41.6251H3.37503C2.95703 41.6217 2.54782 41.5047 2.19114 41.2868C1.83446 41.0688 1.54373 40.758 1.35003 40.3876C1.16991 40.0103 1.0957 39.5913 1.13533 39.1751C1.17496 38.759 1.32694 38.3615 1.57503 38.0251C3.56624 35.3521 6.22328 33.2478 9.28128 31.9219C7.96726 30.7191 6.95767 29.2214 6.3356 27.5521C5.71354 25.8828 5.49678 24.0897 5.70317 22.3203C5.90956 20.5508 6.53319 18.8557 7.52275 17.3744C8.5123 15.8931 9.83949 14.668 11.3951 13.7999C12.9506 12.9318 14.6901 12.4455 16.4704 12.381C18.2507 12.3166 20.0208 12.6758 21.635 13.4292C23.2493 14.1825 24.6616 15.3085 25.7557 16.7144C26.8498 18.1202 27.5944 19.7658 27.9282 21.5157C28.0114 21.9714 27.9536 22.4417 27.7627 22.8638C27.5717 23.2859 27.2566 23.6398 26.8594 23.8782C23.2218 26.0352 20.4552 29.3989 19.0407 33.3844C18.3433 35.3043 17.991 37.3324 18 39.3751ZM70.425 38.0251C68.4338 35.3521 65.7768 33.2478 62.7188 31.9219C64.0328 30.7191 65.0424 29.2214 65.6645 27.5521C66.2865 25.8828 66.5033 24.0897 66.2969 22.3203C66.0905 20.5508 65.4669 18.8557 64.4773 17.3744C63.4878 15.8931 62.1606 14.668 60.605 13.7999C59.0494 12.9318 57.3099 12.4455 55.5297 12.381C53.7494 12.3166 51.9793 12.6758 50.365 13.4292C48.7507 14.1825 47.3384 15.3085 46.2444 16.7144C45.1503 18.1202 44.4057 19.7658 44.0719 21.5157C43.9887 21.9714 44.0464 22.4417 44.2374 22.8638C44.4283 23.2859 44.7434 23.6398 45.1407 23.8782C48.783 26.0297 51.5512 29.3953 52.9594 33.3844C53.6567 35.3043 54.009 37.3324 54 39.3751C53.9963 39.6716 54.0519 39.9658 54.1636 40.2405C54.2753 40.5152 54.4409 40.7648 54.6506 40.9745C54.8603 41.1841 55.1099 41.3497 55.3845 41.4615C55.6592 41.5732 55.9535 41.6288 56.25 41.6251H68.625C69.0429 41.6251 69.4525 41.5087 69.8079 41.289C70.1634 41.0693 70.4506 40.755 70.6375 40.3813C70.8244 40.0075 70.9035 39.5892 70.8659 39.173C70.8284 38.7568 70.6757 38.3593 70.425 38.0251ZM44.2125 50.0907C46.4518 48.3744 48.097 45.9996 48.9171 43.3C49.7372 40.6005 49.6909 37.7119 48.7848 35.04C47.8786 32.3681 46.1581 30.0473 43.865 28.4036C41.5718 26.7599 38.8214 25.876 36 25.876C33.1787 25.876 30.4282 26.7599 28.1351 28.4036C25.842 30.0473 24.1215 32.3681 23.2153 35.04C22.3091 37.7119 22.2628 40.6005 23.0829 43.3C23.903 45.9996 25.5483 48.3744 27.7875 50.0907C23.4128 52.0329 19.8661 55.4601 17.775 59.7657C17.6087 60.1079 17.5341 60.4874 17.5588 60.8671C17.5834 61.2468 17.7064 61.6135 17.9157 61.9313C18.1104 62.2573 18.3864 62.5272 18.7167 62.7145C19.047 62.9018 19.4203 63.0002 19.8 63.0001H52.2C52.5798 63.0002 52.953 62.9018 53.2833 62.7145C53.6136 62.5272 53.8897 62.2573 54.0844 61.9313C54.2936 61.6135 54.4166 61.2468 54.4413 60.8671C54.4659 60.4874 54.3914 60.1079 54.225 59.7657C52.134 55.4601 48.5873 52.0329 44.2125 50.0907Z"
              fill="#aaa"
            />
            <path
              d="M38.5 36.5L38.5 40.423V38.5L38.5 36.5L36 38.5L38 44L37.5 47.5L37 51L36 38.5L38.5 36.5ZM35.2187 60.0417V40.423L31.0979 43.3792L29.0375 40.2438L36.3833 34.9584H39.25V60.0417H35.2187Z"
              fill="#333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Score;
