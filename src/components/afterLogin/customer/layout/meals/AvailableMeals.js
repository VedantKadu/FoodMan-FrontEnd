import React from "react";
import { useSelector } from "react-redux";

import MealItem from "./meal-item/MealItem";

const AvailableMeals = (props) => {
  const veg = useSelector((state) => state.filter.filter.veg);
  const word = useSelector((state) => state.filter.filter.word);
  // const Searchitemschange = useSelector((state) => state.searchResult.change);

  var requiredDishes = props.dishes;
  if (word !== "") {
    requiredDishes = requiredDishes.filter((value) => {
      return value.dishName.toLowerCase().includes(word.toLowerCase());
    });
  }
  if (veg) {
    requiredDishes = requiredDishes.filter((item) => item.type === "Veg");
  }

  return (
    <React.Fragment>
      {requiredDishes.length === 0 && (
        <p>Opps!!! No Veg Items In This Restaurent </p>
      )}
      {requiredDishes.map((item) => {
        return <MealItem item={item} key={item._id} />;
      })}
    </React.Fragment>
  );
};

export default AvailableMeals;
