import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../../store/cart-slice";
import styles from "./CartItem.module.css";
import AddSubtractButton from "../../../UI/AddSubtractButton";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addCartItemHandler = () => {
    dispatch(
      cartSliceActions.addItem({
        _id: props._id,
        dishName: props.dishName,
        url: props.url,
        price: +props.price,
        discount: props.discount,
        restaurent: props.restaurent,
      })
    );
  };
  const removeCartItemHandler = () => {
    dispatch(cartSliceActions.removeItem(props._id));
  };

  const sellingPrice = Math.ceil(
    props.price - (props.discount * props.price) / 100
  );
  return (
    <Fragment>
      <li className={styles["cart-item"]}>
        <h6>{props.name}</h6>
        <div>
          <p>
            ₹{sellingPrice}
            <span> ₹{props.price}</span>
          </p>
          <AddSubtractButton
            className={styles["addsubtract-button"]}
            _id={props._id}
            onAddItem={addCartItemHandler}
            onRemoveItem={removeCartItemHandler}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
