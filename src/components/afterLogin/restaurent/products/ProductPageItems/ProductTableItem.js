import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductTableItem.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { productSearchActions } from "../../../../../store/productSearch-slice";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const productId = props.item._id;

  let status = props.item.status;
  const [checked, setChecked] = useState(props.item.status);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    status = !status;
    updateHandler(event);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/restaurent/" + productId;
    let method = "POST";
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
      body: JSON.stringify({
        status: status,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        dispatch(productSearchActions.changeReload());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = () => {
    let url = "http://localhost:8080/restaurent/delete/" + productId;
    let method = "DELETE";
    fetch(url, {
      method: method,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Delete a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(productSearchActions.changeReload());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.content}>
      <div className={styles["image-container"]}>
        <span className={styles.wrapper}>
          <img src={props.item.url} alt="dish" className={styles.image} />
        </span>
      </div>
      <div className={styles["name-container"]}>
        <span className={styles.wrapper}>
          <p className={styles.name}>{props.item.dishName}</p>
        </span>
      </div>
      <div className={styles["category-container"]}>
        <span className={styles.wrapper}>
          <p className={styles.category}>{props.item.type}</p>
        </span>
      </div>
      <div className={styles["discount-container"]}>
        <span className={styles.wrapper}>
          <p className={styles.discount}>{props.item.discount}%</p>
        </span>
      </div>
      <div className={styles["mrp-container"]}>
        <span className={styles.wrapper}>
          <p className={styles.mrp}>₹{props.item.price}</p>
        </span>
      </div>
      <div className={styles["status-container"]}>
        <span className={styles.wrapper}>
          <FormGroup>
            <FormControlLabel
              checked={checked}
              onChange={handleChange}
              control={<Switch defaultChecked />}
              label=""
            />
          </FormGroup>
        </span>
        {checked ? (
          <span className={styles["in-stock"]}>In Stock</span>
        ) : (
          <span className={styles["out-stock"]}>Out of Stock</span>
        )}
      </div>
      <div className={styles["edit-container"]}>
        <span className={styles.wrapper}>
          <Link to={"/edit/" + productId} className={styles.edit}>
            <EditIcon />
          </Link>
        </span>
        <span className={styles.wrapper}>
          <div className={styles.delete} onClick={deleteHandler}>
            <DeleteIcon />
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
