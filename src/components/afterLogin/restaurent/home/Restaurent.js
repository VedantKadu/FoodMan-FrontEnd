import React, { Fragment } from "react";
import SideNav from "../sidenav/SideNav";
import { Route, Routes } from "react-router";
import ProductPage from "../products/ProductPage";
// import OrderPage from "../orders/OrderPage";

import styles from "./Restaurent.module.css";
import NewProduct from "../products/NewProduct";
import EditProduct from "../products/EditProduct";

const Restaurent = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <SideNav />
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" exact element={<ProductPage />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/edit/:productId" element={<EditProduct />} />
            <Route path="/orders" element={<div>Orders Page</div>} />
            <Route
              path="*"
              element={
                <div>
                  <h1>No page found</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
};

export default Restaurent;
