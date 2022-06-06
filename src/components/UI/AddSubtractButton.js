import React from "react";
import { useSelector } from "react-redux";
import styles from "./AddSubtractButton.module.css";
import Button from "./Button";
import minusImage from "../../assets/Minus.svg";
import plusImage from "../../assets/Plus.svg";

const AddSubtractButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  var incart = false;
  if (totalQuantity > 0) {
    incart = cartItems.find((item) => item._id === props._id);
    console.log(cartItems);
  }

  return (
    <div>
      {!incart && (
        <Button
          className={styles["meal-button"]}
          clickHandler={props.onAddItem}
        >
          <span>
            ADD
            <img src={plusImage} alt="additem-img" />
          </span>
        </Button>
      )}
      {incart && (
        <div className={`${styles.main} ${props.className}`}>
          <Button clickHandler={props.onRemoveItem} className={styles.subtract}>
            <img
              className={props.imageStyles}
              src={minusImage}
              alt="minus-img"
            />
          </Button>
          <span>{incart.quantity}</span>
          <Button clickHandler={props.onAddItem} className={styles.add}>
            <img className={props.imageStyles} src={plusImage} alt="plus-img" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddSubtractButton;
