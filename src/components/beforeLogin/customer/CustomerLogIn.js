import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSliceActions } from "../../../store/auth-slice";
import styles from "./CustomerLogIn.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomerLogIn = () => {
  const [open, setOpen] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setWrong(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("No User Found");
        }
        if (res.status === 402) {
          setWrong(true);
          throw new Error("Wrong User Credentials");
        }
        return res.json();
      })
      .then((resData) => {
        // console.log(resData);
        localStorage.setItem("customerToken", resData.token);
        dispatch(
          authSliceActions.setLoggedIn({ loggedIn: true, customer: true })
        );
        navigate("/");
      })
      .catch((err) => {
        handleClick();
      });
  };

  return (
    <div className={styles.loginform}>
      {!wrong && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "25vw" }}>
            No User Found!!
          </Alert>
        </Snackbar>
      )}
      {wrong && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "25vw" }}>
            Invalid User Credentials!!
          </Alert>
        </Snackbar>
      )}
      <h2 className={styles.header}>Login</h2>
      <form autoComplete="off">
        <div className={styles.row}>
          <label>Username</label>
          <input
            id="email"
            type="text"
            value={user.email}
            placeholder="Enter your username"
            onInput={inputChangeHandler}
          />
        </div>
        <div className={styles.row}>
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            placeholder="Enter your password"
            onInput={inputChangeHandler}
          />
        </div>
        <button className={styles.btn} onClick={loginHandler}>
          Log In{" "}
        </button>
        <div className={styles.signup}>
          don't have an account ? sign up{" "}
          <Link to="/customer/signup">here</Link>
        </div>
      </form>
    </div>
  );
};

export default CustomerLogIn;
