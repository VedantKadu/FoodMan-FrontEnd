import { NavLink, useLocation } from "react-router-dom";
import styles from "./SideNav.module.css";
import BallotIcon from "@mui/icons-material/BallotOutlined";
import KitchenIcon from "@mui/icons-material/KitchenOutlined";

function SideNav() {
  const location = useLocation();
  const path = location.pathname;
  let page = "products";
  if (path.includes("orders")) page = "orders";
  else page = "products";

  return (
    <div className={styles["sidenav"]}>
      <div className={styles["logo-container"]}>Food-Man</div>
      <div className={styles["link-container"]}>
        <ul>
          <li className={page === "products" && styles.active}>
            <NavLink
              to="/"
              exact
              className={`${
                page === "products"
                  ? styles["products-link-active"]
                  : styles["products-link"]
              }`}
            >
              <div className={styles["nav-item"]}>
                <KitchenIcon fontSize="large" />
                <span>Products</span>
              </div>
            </NavLink>
          </li>

          <li className={page === "orders" && styles.active}>
            <NavLink
              to="/orders"
              className={`${
                page === "orders"
                  ? styles["orders-link-active"]
                  : styles["orders-link"]
              }`}
            >
              <div className={styles["nav-item"]}>
                <BallotIcon fontSize="large" />
                <span>Orders</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
