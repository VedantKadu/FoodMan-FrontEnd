import { useNavigate } from "react-router-dom";
import styles from "./OrderDetail.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Fragment } from "react";
import OrderItem from "./OrderItem";

function OrderDetailPage() {
  const history = useNavigate();

  const backPressHandler = () => {
    history.push("/orders");
  };
  return (
    <Fragment>
      <header className={styles["header"]}>
        <div className={styles["head-wrap"]}>
          <KeyboardBackspaceIcon fontSize="large" onClick={backPressHandler} />
          <span className={styles["heading"]}>Order Details</span>
        </div>
        <div className={styles["buttons"]}>
          <div className={styles["btn"]}>Share Receipt</div>
        </div>
      </header>
      <div className={styles["detail-wrap"]}>
        <div className={styles["id-wrap"]}>
          <div className={styles["id"]}>
            <h2> Order ID: #123456</h2>
          </div>
          <div className={styles["status"]}>
            <span className={styles["status-badge"]}></span>
            <span>Delivered</span>
          </div>
        </div>
        <div className={styles["item-detail-wrap"]}>
          <h3 className={styles["c-grey"]}>ITEM DETAILS</h3>
          <div className={styles["item-wrap"]}>
            <OrderItem />
          </div>
        </div>
        <div className={styles["order-detail"]}>
          <div className={styles["order-total"]}>
            <div>Item Total</div>
            <div>₹90</div>
          </div>
          <div className={styles["order-total"]}>
            <div>Delivery</div>
            <div>₹20</div>
          </div>
          <div className={styles["order-total"]}>
            <div>
              <h3>Grand Total</h3>
            </div>
            <div>₹110</div>
          </div>
        </div>
        <div className={styles["customer-detail-wrap"]}>
          <h3 className={styles["c-grey"]}>CUSTOMER DETAILS</h3>
          <div>
            <div className={styles["row"]}>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>Name</p>
                <span>prakhar agrawal</span>
              </div>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>Mobile</p>
                <span>+91 6387113067</span>
              </div>
            </div>
            <div className={styles["row"]}>
              <div className={styles["content-12"]}>
                <p className={styles["bold"]}>Address</p>
                <span>Lal Darwaza SangatKala Ghazipur</span>
              </div>
            </div>
            <div className={styles["row"]}>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>City</p>
                <span>Ghazipur</span>
              </div>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>PinCode</p>
                <span>233001</span>
              </div>
            </div>
            <div className={styles["row"]}>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>State</p>
                <span>Uttar Pradesh</span>
              </div>
              <div className={styles["content-6"]}>
                <p className={styles["bold"]}>Payment Method</p>
                <span>Casg On Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OrderDetailPage;
