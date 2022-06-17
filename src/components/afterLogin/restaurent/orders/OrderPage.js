import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

//Files imports
import Header from "../../../UI/Header";
// import OrderTable from "../../../components/restaurent/orders/OrderPageItems/OrderTable";
// import OTGrid from "../../../components/restaurent/orders/OrderPageItems/Grid/OTGrid";
// import DummyOrders from "./../../Components/Orders/DummyOrders";
import Button from "../../../UI/Button";
import styles from "./OrderPage.module.css";
// import OrderDetailPage from "../../../components/restaurent/orders/OrderDetailPage";

// Material UI imports
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ViewListIcon from "@mui/icons-material/ViewListOutlined";
import AppsIcon from "@mui/icons-material/AppsOutlined";

// Actions imports
// import { OrdersearchActions } from "./../../Store/OrderSearch-slice";

function OrderPage() {
  // const OwordEntered = useSelector((state) => state.Ordersearch.OenteredWord);
  // const OrderSearchBy = useSelector((state) => state.Ordersearch.OrdersearchBy);
  // const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location);

  // const [view, setView] = useState("list");
  // const changeViewList = () => {
  //   if (view !== "list") setView("list");
  // };
  // const changeViewGrid = () => {
  //   if (view !== "grid") setView("grid");
  // };

  // const handleFilter = (event) => {
  //   const searchedWord = event.target.value;
  //   dispatch(OrdersearchActions.setEnteredWord(searchedWord));

  //   const newFilter = DummyOrders.filter((value) => {
  //     if (OrderSearchBy === "_id")
  //       return value._id.toLowerCase().includes(searchedWord.toLowerCase());
  //     return value.name.toLowerCase().includes(searchedWord.toLowerCase());
  //   });

  //   if (searchedWord === "") {
  //     dispatch(OrdersearchActions.changeFilteredData(DummyOrders));
  //   } else {
  //     dispatch(OrdersearchActions.changeFilteredData(newFilter));
  //   }
  // };

  // const searchbyHandler = (event) => {
  //   dispatch(OrdersearchActions.changeSearchBy(event.target.value));
  // };

  return (
    <div className={styles["order"]}>
      <Header header="All Orders" />
      <main className={styles["order-body"]}>
        <div className={styles["search-wrapper"]}>
          <div className={styles["order-search"]}>
            <SearchIcon />
            {/* <input
                  type="search"
                  placeholder={
                    OrderSearchBy === "_id"
                      ? "Search Order ID"
                      : "Search Customer Name"
                  }
                  value={OwordEntered}
                  onChange={handleFilter}
                ></input> */}
          </div>
          <div className={styles["select-wrapper"]}>
            <select className={styles["select"]}>
              <option value="_id">Search By Order ID</option>
              <option value="name">Search By Customer Name</option>
            </select>
          </div>
        </div>

        <div className={styles["order-nav-wrap"]}>
          <div className={styles["order-nav"]}>
            <div className={styles["buttons"]}>
              <Link className={styles["button-links"]}>
                <Button to={`${location.pathname}`} count="89" active={true}>
                  All
                </Button>
              </Link>
              <Link
                to={`${location.pathname}?status=0`}
                className={styles["button-links"]}
              >
                <Button count="3" active={false}>
                  Pending
                </Button>
              </Link>
              <Link
                to={`${location.pathname}?status=1`}
                className={styles["button-links"]}
              >
                <Button count="10" active={false}>
                  Accepted
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles["order-view"]}>
            <span>
              <ViewListIcon fontSize="large" />
            </span>
            <span>
              <AppsIcon fontSize="large" />
            </span>
          </div>
        </div>
        <div className={styles["orderlist"]}>
          {/* {view === "list" ? <OrderTable /> : <OTGrid />} */}
        </div>
      </main>
    </div>
  );
}

export default OrderPage;
