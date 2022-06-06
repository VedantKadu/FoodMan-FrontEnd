import React from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return <AvailableMeals dishes={props.dishes} />;
};

export default Meals;
