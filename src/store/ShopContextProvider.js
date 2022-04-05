import React, { createContext, useEffect, useState } from "react";
import axios from "../axios";
const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [shopLoggedIn, setShopLoggedIn] = useState(true);
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    getShopLogged();
  }, [shopLoggedIn]);

  const getShopLogged = () => {
    axios
      .post("/shop/isShopLoggedIn")
      .then((result) => {
        if (result.data.shop === false) setShopLoggedIn(false);
        else setShopLoggedIn(true);
        const shopObj = result.data.payload;
        if (!!shopObj) setShopData(shopObj);
      })
      .catch((err) => {
        setShopLoggedIn(false);
      });
  };
  return (
    <ShopContext.Provider
      value={{ shopLoggedIn, shopData, setShopData, getShopLogged }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
export { ShopContextProvider };
