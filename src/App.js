import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotLoggedIn from './components/beforeLogin/NotLoggedIn';
import LoggedIn from "./components/beforeLogin/LoggedIn";
import { authSliceActions } from "./store/auth-slice";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.logIn.loggedIn);
  if (!loggedIn) {
    if (localStorage.getItem("restaurentToken")) {
      dispatch(
        authSliceActions.setLoggedIn({ loggedIn: true, customer: false })
      );
    }
    if (localStorage.getItem("customerToken")) {
      dispatch(
        authSliceActions.setLoggedIn({ loggedIn: true, customer: true })
      );
    }
  }
  return loggedIn ? <LoggedIn /> : <NotLoggedIn />;
};

export default App;
