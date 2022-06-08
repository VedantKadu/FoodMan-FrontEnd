import { useNavigate } from "react-router-dom";
import styles from "./NewProduct.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Fragment, useState } from "react";
// import Register from "../../Pages/Register/RegisterPage";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormLabel } from "@mui/material";
import { productSearchActions } from "../../../../store/productSearch-slice";
import { useDispatch } from "react-redux";

function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [url, seturl] = useState("");
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [type, settype] = useState("");
  // const [status, setstatus] = useState(true);
  // function handleImageChange(e) {
  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     seturl(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // }

  // let $imagePreview = null;
  // if (url) {
  //   $imagePreview = <img src={url} alt="justimg" />;
  //   console.log(url);
  // } else {
  //   $imagePreview = (
  //     <div className="previewText">Please select an Image for Preview</div>
  //   );
  // }

  const handleBackPress = () => {
    navigate("/");
  };

  function handleSubmit(event) {
    event.preventDefault();

    let url = "http://localhost:8080/restaurent/new-product";
    let method = "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
      body: JSON.stringify({
        dishName: name,
        price: price,
        discount: discount,
        description: description,
        type: type,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(productSearchActions.changeReload());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Fragment>
      <header className={styles["header"]}>
        <div className={styles["head-wrap"]}>
          <KeyboardBackspaceIcon fontSize="large" onClick={handleBackPress} />
          <span className={styles["heading"]}>Add New Product</span>
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
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Product Name"
                placeholder="Enter Product name"
                variant="outlined"
                onInput={(e) => setName(e.target.value)}
                fullWidth
                required
              ></TextField>
              <TextField
                name="description"
                label="Product Description"
                placeholder="Enter Product Description"
                variant="outlined"
                onInput={(e) => setdescription(e.target.value)}
                fullWidth
              ></TextField>

              <div>
                <TextField
                  name="Price"
                  label="Price"
                  placeholder="Enter Product Price"
                  variant="outlined"
                  onInput={(e) => setprice(e.target.value)}
                  required
                />
                <TextField
                  name="Discount"
                  label="Discount"
                  placeholder="Enter Discount"
                  variant="outlined"
                  onInput={(e) => setdiscount(e.target.value)}
                />
              </div>
              <div className={styles["veg"]}>
                <FormLabel component="legend">Veg/Non-Veg</FormLabel>
                <RadioGroup
                  aria-label="veg"
                  name="gender1"
                  onChange={(e) => settype(e.target.value)}
                >
                  <FormControlLabel
                    value="Veg"
                    control={<Radio />}
                    label="Veg"
                  />
                  <FormControlLabel
                    value="Non-Veg"
                    control={<Radio />}
                    label="Non-Veg"
                  />
                </RadioGroup>
              </div>
              {/* <h2> Add Image of Product </h2>
            <div className={styles["previewComponent"]}>
              <form>
                <input
                  className={styles["fileInput"]}
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
                <button className={styles["submitButton"]} type="submit">
                  Upload Image
                </button>
              </form>
              <div className={styles["imgPreview"]}>{$imagePreview}</div>
            </div> */}
              <div className={styles["btns"]}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px", width: "50%" }}
                >
                  Add Product
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

export default NewProduct;
