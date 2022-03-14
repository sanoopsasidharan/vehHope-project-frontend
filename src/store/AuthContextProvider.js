import React, { createContext, useEffect, useState } from "react";
import axios from "../axios";
const AuthContext = createContext();

function AuthContextProvider(props) {
  const [userlogged, setUserlogged] = useState(true);
  const [shopLogged, setShopLogged] = useState(true);

  const getShopLoggedIn = async () => {
    const trueShop = await axios.post("/shop/IsloggedIn");
    // console.log(trueShop);
    setShopLogged(true);
  };

  const getUserLogged = async () => {
    const trueUser = await axios.post("/isLoggedin");
    // console.log(trueUser.data.user);
    setUserlogged(trueUser.data.user);
  };
  useEffect(() => {
    getUserLogged();
    getShopLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{ userlogged, getUserLogged, shopLogged, getShopLoggedIn }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
