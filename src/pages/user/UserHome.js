import React, { useContext, useEffect } from "react";
import HomeContants from "../../component/user/HomeContants";
import NavigationBar from "../../component/navBar/NavigationBar";
import AuthContext from "../../store/AuthContextProvider";
import axios from "../../axios";
function UserHome() {
  const { userDetails } = useContext(AuthContext);
  const navigateTo = "/shopDetails";

  return (
    <>
      {/* <NavBar/> */}
      <NavigationBar />
      <HomeContants navigateTo={navigateTo} />
    </>
  );
}

export default UserHome;
