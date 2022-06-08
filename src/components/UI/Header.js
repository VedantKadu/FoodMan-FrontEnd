import styles from "./header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountModal from "./AccountModal";
import { accountModalActions } from "../../store/accountModal-slice";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  const AccountModalView = useSelector((state) => state.accountModal.view);
  const dispatch = useDispatch();

  const AccountModalHandler = () => {
    dispatch(accountModalActions.setView());
  };

  return (
    <header className={styles["header"]}>
      <span className={styles["brand"]}>{props.header}</span>
      <nav className={styles["navbar"]}>
        <span />
        <span onClick={AccountModalHandler}>
          <AccountCircleIcon fontSize="large" />
        </span>
        {AccountModalView && <AccountModal onClick={AccountModalHandler} />}
      </nav>
    </header>
  );
}

export default Header;
