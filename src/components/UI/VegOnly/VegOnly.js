import React from "react";
import styles from "./VegOnly.module.css";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";
import { useDispatch, useSelector } from "react-redux";
import { vegonlyActions } from "../../../Store/vegonly-slice";

const VegOnly = (props) => {
  const veg = useSelector((state) => state.vegonly.veg);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(vegonlyActions.changeType());
  };

  return (
    <div className={styles["wrapper"]}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleChange}
      />
      {!veg ? (
        <ToggleOff className={styles.toggleoff} />
      ) : (
        <ToggleOn className={styles.toggleon} />
      )}
    </div>
  );
};

export default VegOnly;
