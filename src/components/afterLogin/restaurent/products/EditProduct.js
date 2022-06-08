import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditProduct.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Fragment, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { productSearchActions } from "../../../../store/productSearch-slice";

function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.productId;

  const [product, setProduct] = useState({
    dishName: "",
    price: "",
    description: "",
    discount: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/restaurent/edit/" + productId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch status");
        }
        return res.json();
      })
      .then((resData) => {
        setProduct((prevState) => ({
          ...prevState,
          dishName: resData.product.dishName,
          price: resData.product.price,
          discount: resData.product.discount,
          type: resData.product.type,
          description: resData.product.description,
          status: resData.product.status,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const handleBackPress = () => {
    navigate("/");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/restaurent/edit/" + productId;
    let method = "PUT";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
      body: JSON.stringify({
        dishName: product.dishName,
        price: product.price,
        disprice: product.discount,
        description: product.description,
        type: product.type,
        status: product.status,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        navigate("/");
        dispatch(productSearchActions.changeReload());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const discounted_price = reqProduct.price - reqProduct.price*reqProduct.discount/100;
  // console.log(product)

  const inputChangeHandler = (event) => {
    setProduct((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <Fragment>
      <header className={styles["header"]}>
        <div className={styles["head-wrap"]}>
          <KeyboardBackspaceIcon fontSize="large" onClick={handleBackPress} />
          <span className={styles["heading"]}>Edit Product</span>
        </div>
      </header>

      <div className={styles["newprod-wrap"]}>
        <div className={styles["form-wrap"]}>
          <h2>Product Information</h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <form>
              <TextField
                name="name"
                id="dishName"
                label="Product Name"
                variant="outlined"
                value={product.dishName}
                onChange={inputChangeHandler}
                fullWidth
                required
              ></TextField>
              <TextField
                name="description"
                id="description"
                label="Product Description"
                value={product.description}
                onChange={inputChangeHandler}
                variant="outlined"
                fullWidth
              ></TextField>

              <div>
                <TextField
                  name="Price"
                  id="price"
                  label="Price"
                  variant="outlined"
                  onChange={inputChangeHandler}
                  value={product.price}
                  required
                />
                <TextField
                  name="DisPrice"
                  id="discount"
                  label="Discounted Price"
                  onChange={inputChangeHandler}
                  variant="outlined"
                  value={product.discount}
                />
              </div>
              <div className={styles["veg"]}>
                <FormLabel component="legend">Veg/Non-Veg</FormLabel>
                <RadioGroup
                  aria-label="veg"
                  name="gender1"
                  value={product.type}
                >
                  <FormControlLabel
                    id="type"
                    value="Veg"
                    control={<Radio />}
                    label="Veg"
                  />
                  <FormControlLabel
                    id="type"
                    value="Non-Veg"
                    control={<Radio />}
                    label="Non-Veg"
                  />
                </RadioGroup>
              </div>
              <div className={styles["btns"]}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={updateHandler}
                  style={{ marginTop: "10px", width: "50%" }}
                >
                  Update Product
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

export default EditProduct;
