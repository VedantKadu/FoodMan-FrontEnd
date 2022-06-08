import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// css imports
import styles from "./Navbar.module.css";

// image imports
import logo_img from "../../assets/hamburger.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountModal from "../UI/AccountModal";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { customeraccountModalActions } from "../../store/customerAccountModal-slice";
// import { authSliceActions } from "../../../../store/auth-slice";

const Navbar = (props) => {
  const logIn = useSelector((state) => state.logIn.loggedIn);
  const customerAccountModalView = useSelector(
    (state) => state.customeraccountModal.view
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  const CustomerAccountModalHandler = () => {
    dispatch(customeraccountModalActions.setView());
    console.log(customerAccountModalView);
  };

  return (
    <React.Fragment>
      <div>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles["nav-container"]}>
              <div className={styles["logo-container"]}>
                <div className={styles["brand-container"]}>
                  <div className={styles["logo"]}>
                    <Link to="/">
                      <img
                        className={styles["nav-logo"]}
                        src={logo_img}
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className={styles["brand-name"]}>
                    <Link to="/" className={styles.brandName}>
                      The Food's Man
                    </Link>
                  </div>
                </div>
              </div>
              {logIn ? (
                <div className={styles["icon-container"]}>
                  <div>
                    <NavLink
                      activeClassName={styles.active}
                      className={styles["navbar-link"]}
                      to="/bag"
                    >
                      <span>
                        <LocalMallOutlinedIcon />
                      </span>
                      Bag
                    </NavLink>
                  </div>

                  <div onClick={CustomerAccountModalHandler}>
                    <NavLink
                      to="/account"
                      activeClassName={styles.active}
                      className={styles["navbar-link"]}
                    >
                      <span>
                        <AccountCircleOutlinedIcon />
                      </span>
                      Account
                    </NavLink>
                  </div>
                  {customerAccountModalView && (
                    <AccountModal onClick={CustomerAccountModalHandler} />
                  )}
                </div>
              ) : (
                <div className={styles["icon-container"]}>
                  <div>
                    <NavLink
                      activeClassName={styles.active}
                      className={styles["navbar-link"]}
                      to="/customer"
                      exact
                    >
                      <span></span>
                      Customer
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      activeClassName={styles.active}
                      className={styles["navbar-link"]}
                      to="/restaurent"
                      exact
                    >
                      <span></span>
                      Restaurent
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
        <div className={styles["mobile-nav"]}>
          <div>
            <NavLink
              to="/"
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
            >
              <span>
                <HomeOutlinedIcon />
              </span>
              Home
            </NavLink>
            <NavLink
              to="/bag"
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
            >
              <span>
                <LocalMallOutlinedIcon />
              </span>
              Bag
            </NavLink>

            <NavLink
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
              to="/account"
            >
              <span>
                <AccountCircleOutlinedIcon />
              </span>
              Account
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
