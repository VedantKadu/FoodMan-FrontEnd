import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSliceActions } from "../../../store/auth-slice";
import styles from "./CustomerLogIn.module.css";

const CustomerLogIn = () => {
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
        if (res.status === 422) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        localStorage.setItem("customerToken", resData.token);
        dispatch(
          authSliceActions.setLoggedIn({ loggedIn: true, customer: true })
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.loginform}>
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
