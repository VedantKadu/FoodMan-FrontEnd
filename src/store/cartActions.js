import { cartSliceActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/customer/fetchcart", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("customerToken"),
        },
      });

      const cart = await response.json();
      return cart;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(
        cartSliceActions.replaceCart({
          items: cartData.cart.items.length > 0 ? cartData.cart.items : [],
          totalQuantity: cartData.cart.totalQuantity || 0,
          totalAmount: cartData.cart.totalAmount || 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8080/customer/addtocart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalAmount: cart.totalAmount,
        }),
      });
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Sending cart data failed!");
    }
  };
};
