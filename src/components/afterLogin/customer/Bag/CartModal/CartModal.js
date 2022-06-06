import React from "react";
import { useSelector } from "react-redux";
import styles from "./CartModal.module.css";

const CartModal = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <span className={`${styles.cartmodal} ${props.className}`}>
      {totalQuantity}
    </span>
  );
};

export default CartModal;
