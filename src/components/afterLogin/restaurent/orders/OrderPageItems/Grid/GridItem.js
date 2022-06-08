import React from "react";
import styles from "./OTGrid.module.css";
import { Link, useLocation, Route } from "react-router-dom";

const GridItem = (props) => {
  const location = useLocation();
  const orderId = props.item._id.slice(1);

  return (
    <li className={styles["grid-item"]}>
      <div className={styles.header}>
        <span className={styles.orderid}>{props.item._id}</span>
        <span className={styles.date}>28/09/2021</span>
      </div>
      <div className={styles.content}>
        <img className={styles.image} src={props.item.url} alt="item" />
        <div className={styles.info}>
          <div className={styles.group}>
            <span className={styles.items}>{props.item.quantity} Items</span>
            <span className={styles.price}>₹{props.item.amount}</span>
          </div>
          <span className={styles.method}>{props.item.payment}</span>
        </div>
      </div>
      <Route path="/orders">
        <div className={styles.footer}>
          <Link
            to={`${location.pathname}/${orderId}`}
            className={styles["details-link"]}
          >
            <span>Details</span>
          </Link>
        </div>
      </Route>
    </li>
  );
};

export default GridItem;
