import React from "react";
import { useSelector } from "react-redux";
import HomePageItem from "../layout/home/home-items/HomePageItem";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const restaurentList = useSelector((state) => state.restaurent.hotels);
  console.log(restaurentList);

  return (
    <div className={styles.home_wrapper}>
      {restaurentList.map((restaurent) => {
        return <HomePageItem item={restaurent} />;
      })}
    </div>
  );
};

export default HomePage;
