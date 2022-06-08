import React from "react";
import styles from "./AccountModal.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { accountModalActions } from "../../store/accountModal-slice";
import { authSliceActions } from "../../store/auth-slice";
import { useNavigate } from "react-router";
import { customeraccountModalActions } from "../../store/customerAccountModal-slice";

const Overley = (props) => {
  const [value, setValue] = React.useState(true);
  const customer = useSelector((state) => state.logIn.customer);

  const dispatch = useDispatch();
  const history = useNavigate();

  const logOutHandler = () => {
    if (!customer) {
      localStorage.removeItem("restaurentToken");
      dispatch(accountModalActions.setView());
      dispatch(
        authSliceActions.setLoggedIn({ loggedIn: false, customer: false })
      );
    } else {
      localStorage.removeItem("customerToken");
      dispatch(customeraccountModalActions.setView());
      dispatch(
        authSliceActions.setLoggedIn({ loggedIn: false, customer: false })
      );
    }
    history("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles["main-items"]}>
            <AccountCircleIcon fontSize="large" />
            <p className={styles.text}>My Account </p>
          </div>
          <div className={styles["main-items"]} onClick={logOutHandler}>
            <LogoutIcon fontSize="large" />
            <p className={styles.text}>Sign Out </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.logIn.customer);

  const AccountModalHandler = () => {
    if (!customer) {
      dispatch(accountModalActions.setView());
    } else {
      dispatch(customeraccountModalActions.setView());
    }
  };

  return (
    <div className={styles["backdrop"]} onClick={AccountModalHandler}></div>
  );
};

const AccountModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overley"))}
      {ReactDOM.createPortal(
        <Overley>{props.children}</Overley>,
        document.getElementById("overley")
      )}
    </Fragment>
  );
};

export default AccountModal;
