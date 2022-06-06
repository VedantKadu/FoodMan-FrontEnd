// import React from "react";
// import Customer from "../../customer/home/Customer";
// import Restaurent from "../../restaurent/home/Restaurent";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const customer = useSelector((state) => state.logIn.customer);
  return customer ? console.log("customer") : console.log("restaurent");
  // return customer ? <Customer /> : <Restaurent />;
};

export default LoggedIn;
