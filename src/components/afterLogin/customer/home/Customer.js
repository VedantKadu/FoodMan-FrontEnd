import React, { Fragment, useEffect } from "react";
import HomePage from "./HomePage";
import Bag from "../Bag/Bag";
import Navbar from "../../../UI/Navbar";
import RestaurentDetailPage from "../layout/home/restaurent/RestaurentDetailPage";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RestaurentDataActions } from "../../../../store/restaurentData-slice";
import { fetchCartData, sendCartData } from "../../../../store/cartActions";

let isInitial = true;

const Customer = () => {
  const dispatch = useDispatch();
  const restaurentList = useSelector((state) => state.restaurent.hotels);
  console.log(restaurentList);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("http://localhost:8080/customer/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("customerToken"),
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch products.");
        }
        return res.json();
      })
      .then((resData) => {
        dispatch(RestaurentDataActions.changeData(resData.hotels));
        dispatch(fetchCartData());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Navbar />
      {restaurentList.length > 0 ? (
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/customer" exact element={<HomePage />} />
          <Route path="/bag" exact element={<Bag />} />
          <Route path="/account" exact element={<HomePage />} />
          <Route path="/:restaurent_id" element={<RestaurentDetailPage />} />
        </Routes>
      ) : (
        <h1>Loading....</h1>
      )}
    </Fragment>
  );
};

export default Customer;
