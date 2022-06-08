import styles from "./ProductPage.module.css";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Header from "../../../UI/Header";
import ProductsTable from "../products/ProductPageItems/ProductsTable";
import { Fragment } from "react";

import { productSearchActions } from "../../../../store/productSearch-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ProductPage() {
  const wordEntered = useSelector((state) => state.productSearch.enteredWord);
  const productlist = useSelector((state) => state.productSearch.filteredData);
  const reload = useSelector((state) => state.productSearch.reload);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewProduct = () => {
    navigate("/new-product");
  };

  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    dispatch(productSearchActions.setEnteredWord(searchedWord));
    const newFilter = productlist.filter((value) => {
      return value.dishName.toLowerCase().includes(searchedWord.toLowerCase());
    });

    if (searchedWord !== "") {
      dispatch(productSearchActions.changeSearchData(newFilter));
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/restaurent/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("restaurentToken"),
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch products.");
        }
        return res.json();
      })
      .then((resData) => {
        dispatch(productSearchActions.changeFilteredData(resData.products));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const reloadPage = () => {
    window.location.reload();
    dispatch(productSearchActions.changeReload());
  };

  return (
    <Fragment>
      {reload && reloadPage()}
      <div className={styles["product"]}>
        <Header header="All Products" />
        <main className={styles["product-body"]}>
          <div className={styles["product-nav-wrap"]}>
            <div className={styles["product-search"]}>
              <SearchIcon />
              <input
                type="search"
                placeholder={"Search Product Name"}
                value={wordEntered}
                onChange={handleFilter}
              ></input>
            </div>
            <div className={styles["product-view"]}>
              <span></span>
              <span></span>
              <div className={styles["btn"]}>
                <div className={styles["button"]} onClick={addNewProduct}>
                  Add New Product
                </div>
              </div>
            </div>
          </div>
          <div className={styles["productlist"]}>
            <ProductsTable />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default ProductPage;
