import React from "react";
import { Link } from "react-router-dom";
import styles from "./OrderTable.module.css";
import Item from "./OrderTableItem";

const TableItem = (props) => {
  let orderId = props.item._id;
  orderId = orderId.slice(1);
  return (
    <Link to={"/orders/" + orderId} className={styles["table-item"]}>
      <Item className={styles.orderid}>{props.item._id}</Item>
      <Item className={styles.date}>Monday, 27-09-2021</Item>
      <Item className={styles.time}>9:46 PM</Item>
      <Item className={styles.customer}>{props.item.name}</Item>
      <Item className={styles.items}>{props.item.quantity}</Item>
      <Item className={styles.payment}>{props.item.payment}</Item>
      <Item className={styles.status}>Confirmed</Item>
      <Item className={styles.amount}>{props.item.amount}</Item>
    </Link>
  );
};

export default TableItem;
