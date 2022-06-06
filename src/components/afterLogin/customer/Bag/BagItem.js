import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../../store/cart-slice";
import AddSubtractButton from "../../../UI/AddSubtractButton";
import styles from "./BagItem.module.css";

const BagItem = (props) => {
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
      <li className={styles["bag-item"]}>
        <div className={styles["img-wrapper"]}>
          <img src={props.url} alt="meal-img" />
        </div>
        <div className={styles["content-wrapper"]}>
          <h4>{props.dishName}</h4>
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
        </div>
      </li>
    </Fragment>
  );
};

export default BagItem;
