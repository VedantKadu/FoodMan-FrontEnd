import React from "react";
import { Link } from "react-router-dom";

import styles from "./Choice.module.css";
import deliveryImg from "../../assets/delivery.png";

const Choice = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info_wrapper}>
        <div className={styles.info}>
          <div>
            <div className={styles.tagline1}>
              <span>Safe Food</span>
            </div>
            <div className={styles.tagline2}>
              <span>DELIVERY</span>
            </div>
          </div>

          <div className={styles.notes}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet.
            </span>
          </div>
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_customer}>
              <Link to="/customer">Customer</Link>
            </div>
            <div className={styles.btn_restaurent}>
              <Link to="/restaurent">Restaurent</Link>
            </div>
          </div>
        </div>
        <div className={styles.img_wrapper}>
          <img src={deliveryImg} alt="safe delivery" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Choice;
