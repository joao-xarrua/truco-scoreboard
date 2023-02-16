import React from "react";
import style from "./Input.module.css";

const Input = ({ name, label, text, children, value, onChange, disabled }) => {
  return (
    <div className={style.input}>
      {children}
      <div className={style.label}>
        <label htmlFor={name}>{label}</label>
        <p>{text}</p>
      </div>
      {disabled ? (
        <input
          type="text"
          id={name}
          value={value}
          onChange={onChange}
          disabled
        />
      ) : (
        <input type="text" id={name} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default Input;
