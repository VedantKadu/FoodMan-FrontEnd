import React from "react";
import styles from "./OrderTable.module.css";
import Item from "./OrderTableItem";
import { useSelector } from "react-redux";

import TableItem from "./TableItem";

const OrderTable = (props) => {
  const filteredData = useSelector((state) => state.Ordersearch.OfilteredData);
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <Item className={styles.orderid}>OrderID</Item>
        <Item className={styles.date}>Date</Item>
        <Item className={styles.time}>Time</Item>
        <Item className={styles.customer}>Customer</Item>
        <Item className={styles.items}>Items</Item>
        <Item className={styles.payment}>Payment</Item>
        <Item className={styles.status}>Status</Item>
        <Item className={styles.amount}>Amount</Item>
      </div>
      <div className={styles.content}>
        {filteredData.map((item) => {
          return (
            <div className={styles["tableItem-wrapper"]} key={item._id}>
              <TableItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTable;
