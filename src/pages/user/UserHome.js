import React from "react";
import HomeContants from "../../component/user/HomeContants";
import NavBar from "../../component/navBar/NavBar";
import NavigationBar from "../../component/navBar/NavigationBar";

function UserHome() {
  return (
    <>
      {/* <NavBar/> */}
      <NavigationBar />
      <HomeContants />
    </>
  );
}

export default UserHome;
