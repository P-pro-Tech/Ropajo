/** @format */

import React, { useEffect, useReducer, createContext } from "react";

const initialState = {
  userInfo: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return { ...state, userInfo: undefined };
    default:
      return state;
  }
};

const defaultDispatch = () => initialState;

const Store = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : undefined;
    if (userInfo) {
      dispatch({ type: "USER_SIGNIN", payload: userInfo });
    }
  }, []);

  return <Store.Provider value={{ state, dispatch }} {...props} />;
};

export { Store, StoreProvider };
