import React from "react";
import style from "./Input.module.css";

const Input = ({ name, label, text, children }) => {
  return (
    <div className={style.input}>
      {children}
      <div className={style.label}>
        <label htmlFor={name}>{label}</label>
        <p>{text}</p>
      </div>
      <input type="text" id={name} />
    </div>
  );
};

export default Input;
