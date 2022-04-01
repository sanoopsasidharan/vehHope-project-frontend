import React from "react";
import HomePage from "../../component/ShopComponet/HomePage/HomePage";
import NavBar from "../../component/ShopComponet/NavigationBar/NavBar";
import HomeContants from "../../component/user/HomeContants";

function ShopHomePage() {
  const navigateTo = "/shopDetailsShop";

  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      <HomeContants navigateTo={navigateTo} />
    </div>
  );
}

export default ShopHomePage;
