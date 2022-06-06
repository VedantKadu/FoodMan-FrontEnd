import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomePageItem.module.css";

const HomePageItem = (props) => {
  const url =
    "https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg";

  return (
    <Link to={"/" + props.item._id} className={styles["cards_item"]}>
      <div className={styles["card"]}>
        <img className={styles["img"]} src={url} alt="" />
        <h2 className={styles["card__title"]}>{props.item.restaurentName}</h2>
        <div className={styles["card__shop"]}>
          <div className={styles["item-amount"]}>
            min bill amount
            <span className={styles["strikedout-amount"]}>
              ₹{+props.item.minBill}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePageItem;
