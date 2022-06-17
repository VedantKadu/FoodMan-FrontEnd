import React from "react";
import styles from "../customer/CustomerSignUp.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RestaurentRegister = () => {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (!err) {
      navigate("/restaurent");
    }

    if (reason === "clickaway") {
      return;
    }
    setErr(false);
    setOpen(false);
  };

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    con_password: "",
    minBill: "",
    aptName: "",
    locality: "",
    street: "",
    zipcode: "",
    Contact: "",
  });

  const inputChangeHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const signupHandler = (event) => {
    // console.log(user);
    event.preventDefault();
    fetch("http://localhost:8080/restaurent/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
        minBill: user.minBill,
        Address: {
          aptName: user.aptName,
          locality: user.locality,
          street: user.street,
          zipcode: user.zipcode,
        },
        Contact: user.Contact,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Creating a user failed!");
        }
        return res.json();
      })
      .then((resData) => {
        handleClick();
      })
      .catch((err) => {
        setErr(true);
        handleClick();
      });
  };

  return (
    <div className={styles["Reg-container"]}>
      {err && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "25vw" }}>
            Email Address Already Exist!!
          </Alert>
        </Snackbar>
      )}
      {!err && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "25vw" }}
          >
            User Signup Successfull!!
          </Alert>
        </Snackbar>
      )}
      <div className={styles["form-container"]}>
        <h1>Fill Details To Sign Up</h1>
        <form>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              placeholder="Your name"
              onChange={inputChangeHandler}
              fullWidth
              required
            ></TextField>
            <TextField
              id="email"
              label="Email"
              placeholder="Email Address"
              onChange={inputChangeHandler}
              fullWidth
              required
            ></TextField>
            <TextField
              id="password"
              name="password"
              type="password"
              onChange={inputChangeHandler}
              label="Password"
              fullWidth
              required
            />
            <TextField
              id="con_password"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              onChange={inputChangeHandler}
              fullWidth
              required
            />
            <TextField
              id="minBill"
              name="Minimum Bill Amount"
              type="number"
              label="Minimum Bill Amount"
              onChange={inputChangeHandler}
              fullWidth
              required
            />
            <Typography
              variant="body2"
              component="p"
              style={{ margin: "10px 10px 2px 10px" }}
            >
              Address:
            </Typography>
            <div>
              <TextField
                id="aptName"
                name="aptName"
                label="Floor/Apartment Name"
                onChange={inputChangeHandler}
                required
              />
              <TextField
                id="locality"
                name="locality"
                label="Locality"
                onChange={inputChangeHandler}
                required
              />
              <TextField
                id="street"
                name="street"
                label="Street"
                onChange={inputChangeHandler}
                required
              />
              <TextField
                id="zipcode"
                name="zip"
                label="Zip Code"
                type="number"
                onChange={inputChangeHandler}
                required
              />
              <TextField
                id="Contact"
                name="phoneNo"
                label="Contact Number"
                type="number"
                onChange={inputChangeHandler}
                fullWidth
                required
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={signupHandler}
              style={{ marginTop: "10px", width: "15%" }}
            >
              Submit
            </Button>
            <div className={styles.signup}>
              Already have an account ? <Link to="/customer">Log In here</Link>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default RestaurentRegister;
