import React from "react";
import Customer from "../afterLogin/customer/home/Customer";
import Restaurent from "../afterLogin/restaurent/home/Restaurent";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const customer = useSelector((state) => state.logIn.customer);

  return customer ? <Customer /> : <Restaurent />;
};

export default LoggedIn;
