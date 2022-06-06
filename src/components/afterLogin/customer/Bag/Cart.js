import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../../../../store/cart-slice";
import BagTotal from "./BagTotal";

// Image Imports
// import cartEmpty_img from "../../../../assets/";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const clearBagHandler = () => {
    dispatch(cartSliceActions.clearBag());
  };

  return (
    <div>
      <div className="cart-header">
        <h3>
          Bag
          <span className="cart-count">{totalQuantity}</span>
        </h3>
        <div className="clear-cart" onClick={clearBagHandler}>
          Clear Bag
        </div>
      </div>
      <div
        className={`${"cart-body-noitem"} ${
          totalQuantity > 0 && "style-3 cart-body-item"
        }`}
      >
        {totalQuantity === 0 ? (
          <div className="empty-cart">
            {/* <img src={cartEmpty_img} alt="cart is empty" /> */}
            <h4>Your bag is empty</h4>
            <p>Looks like you haven’t made your choice yet</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item._id}
              dishName={item.name}
              quantity={item.quantity}
              price={item.price}
              discount={item.discount}
              _id={item._id}
              restaurent={item.restaurent}
            />
          ))
        )}
      </div>
      <div className="cart-footer">{totalAmount > 0 && <BagTotal />}</div>
    </div>
  );
};

export default Cart;
