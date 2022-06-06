import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Choice from "./Choice";
import CustomerLogIn from "./customer/CustomerLogIn";
import CustomerSignUp from "./customer/CustomerSignUp";
import RestaurentLogIn from "./restaurent/RestaurentLogIn";
import RestaurentRegister from "./restaurent/RestaurentRegister";

const NotLoggedIn = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Choice />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/customer" element={<CustomerLogIn />} />
        <Route path="/restaurent/signup" element={<RestaurentRegister />} />
        <Route path="/restaurent" element={<RestaurentLogIn />} />
      </Routes>
    </Fragment>
  );
};

export default NotLoggedIn;
