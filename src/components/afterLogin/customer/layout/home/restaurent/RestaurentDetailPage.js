import React from "react";
import styles from "./RestaurentDetailPage.module.css";
// import AvailableMeals from "../../meals/AvailableMeals";
// import Cart from "../../bag/Cart";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Meals from "../../meals/Meals";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../../../../store/filterSlice";
import Cart from "../../../Bag/Cart";

const RestaurentDetailPage = () => {
  const url =
    "https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg";

  const restaurentsList = useSelector((state) => state.restaurent.hotels);
  const params = useParams();
  const dispatch = useDispatch();
  const restaurentId = params.restaurent_id;

  // console.log(restaurentsList);
  const veg = useSelector((state) => state.filter.filter.veg);
  const wordEntered = useSelector((state) => state.filter.filter.word);

  const restaurent = restaurentsList.find(
    (restaurent) => restaurent._id === restaurentId
  );

  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    dispatch(filterActions.changeWord({ word: searchedWord }));
    // const newFilter = productlist.filter((value) => {
    //   return value.dishName.toLowerCase().includes(searchedWord.toLowerCase());
    // });

    // if (searchedWord !== "") {
    //   dispatch(productSearchActions.changeSearchData(newFilter));
    // }
  };
  const handleChange = (event) => {
    dispatch(filterActions.changeVeg({ veg: event.target.checked }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <div className={styles.wrap}>
          <div className={styles.restContainer}>
            <div className={styles.res_image}>
              <img className={styles.image} src={url} alt="hotel dp" />
            </div>
            <div className={styles.res_info}>
              <div className={styles.resName}>{restaurent.restaurentName}</div>
              <div className={styles.resAddress}>
                {restaurent.address.locality}
                {`, ${restaurent.address.street}`}
              </div>
              <div className={styles.resBill}>
                Minimum Bill Amount :- {restaurent.minBill}
              </div>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles["product-search"]}>
              <span className={styles.icon}>
                <SearchIcon />
              </span>
              <input
                type="search"
                placeholder={"Search Product Name"}
                value={wordEntered}
                onChange={handleFilter}
              ></input>
            </div>
            <div className={styles.veg}>
              <FormGroup>
                <FormControlLabel
                  checked={veg}
                  onChange={handleChange}
                  control={<Switch />}
                  label=""
                />
              </FormGroup>
              <span>Veg Only</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body_wrapper}>
        <div className={styles.meals}>
          <Meals dishes={restaurent.dishes} />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default RestaurentDetailPage;
