import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className={`${props.className} ${styles.button}`}
    >
      {props.children}
    </div>
  );
};

export default Button;
