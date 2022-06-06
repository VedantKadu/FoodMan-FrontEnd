import React from "react";
import { useDispatch } from "react-redux";
import styles from "./MealItem.module.css";
import AddSubtractButton from "../../../../../UI/AddSubtractButton";
import { cartSliceActions } from "../../../../../../store/cart-slice";

// Image imports
import veganImage from "../../../../../../assets/vegetarian_mark.png";
import nonvegImg from "../../../../../../assets/non_vegetarian_mark.png";

const MealItem = (props) => {
  const dispatch = useDispatch();
  const addCartItemHandler = () => {
    dispatch(
      cartSliceActions.addItem({
        _id: props.item._id,
        dishName: props.item.dishName,
        url: props.item.url,
        price: +props.item.price,
        discount: props.item.discount,
        restaurent: props.item.restaurent,
      })
    );
  };
  const removeCartItemHandler = () => {
    dispatch(cartSliceActions.removeItem(props.item._id));
  };

  const selling_price = Math.ceil(
    props.item.price - (props.item.discount * props.item.price) / 100
  );
  return (
    <li className={styles["meal-item"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["item-image"]}
          src={props.item.url}
          alt="mealitem-img"
        />
        <div className={styles["discount-badge"]}>
          <span className={styles["discount"]}>
            {props.item.discount} % OFF
          </span>
        </div>
      </div>
      <div className={styles["item-contents"]}>
        <div className={styles["meal-info"]}>
          {props.item.type === "Veg" ? (
            <img
              className={styles["veg-image"]}
              src={veganImage}
              alt="meal-type"
            />
          ) : (
            <img
              className={styles["veg-image"]}
              src={nonvegImg}
              alt="meal-type"
            />
          )}
          <span>{props.item.dishName}</span>
        </div>
        <div className={styles.description}>{props.item.description}</div>
        <div className={styles["amount-container"]}>
          <p className={styles["item-amount"]}>
            ₹{selling_price}
            <span className={styles["strikedout-amount"]}>
              ₹{props.item.price}
            </span>
          </p>

          <AddSubtractButton
            className={styles["add-subtract-button"]}
            imageStyles={styles["add-subtract-img"]}
            onAddItem={addCartItemHandler}
            onRemoveItem={removeCartItemHandler}
            _id={props.item._id}
          />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
