import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={`${styles.button} ${props.active && styles.active}`}>
      <div className={styles.content}>
        <span className={styles.text}>{props.children}</span>
        <span className={styles.count}>({props.count})</span>
      </div>
    </div>
  );
};

export default Button;
