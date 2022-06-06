import React from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import "./BagTotal.css";

const BagTotal = (props) => {
  // const history = useHistory();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  var grandTotal = totalAmount;
  if (totalAmount < 300) grandTotal += 20;

  // const checkOutHandler = () => {
  //   history.push("/bag");
  // };
  return (
    <div className="wrapper">
      <div className="cart-item-total">
        <div className="item-total">
          <span>Item Total</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="Delivery">
          <span>Delivery</span>
          {totalAmount > 300 ? (
            <span className="Delivery-text">Free</span>
          ) : (
            <span>₹20</span>
          )}
        </div>
        {totalAmount < 300 && (
          <div className="info">
            <span>
              <span>Free delivery above </span>
              <span>₹300</span>
            </span>
          </div>
        )}
      </div>
      <div>
        <div className="cart-total">
          <span>Grand Total</span>
          <span>₹{grandTotal}</span>
        </div>
        <div className="check-btn">
          <div className="checkout">Proceed To Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default BagTotal;
