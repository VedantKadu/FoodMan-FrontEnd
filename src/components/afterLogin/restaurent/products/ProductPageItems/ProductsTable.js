import React from "react";
import styles from "./ProductsTable.module.css";
import Item from "../../../restaurent/orders/OrderPageItems/OrderTableItem";
import ProductItem from "./ProductTableItem";
import { useSelector } from "react-redux";

const ProductsTable = () => {
  const filteredData = useSelector((state) => state.productSearch.filteredData);
  const SearchData = useSelector((state) => state.productSearch.searchData);
  const searchedWord = useSelector((state) => state.productSearch.enteredWord);

  let productlist;
  if (searchedWord === "") productlist = filteredData;
  else productlist = SearchData;

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <Item className={styles.image}>Image</Item>
        <Item className={styles.product}>Product</Item>
        <Item className={styles.category}>Category</Item>
        <Item className={styles.discount}>Discount</Item>
        <Item className={styles.mrp}>MRP</Item>
        <Item className={styles.status}>Status</Item>
        <Item className={styles.edit}>Edit</Item>
      </div>
      <div>
        {productlist.map((item) => {
          return <ProductItem item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsTable;
