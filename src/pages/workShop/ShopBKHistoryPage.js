import React from "react";
import ShopNavBar from "../../component/navBar/ShopNavBar";
import ShopBookingHistory from "../../component/shopBookingHistory/ShopBookingHistory";
import NavBar from "../../component/ShopComponet/NavigationBar/NavBar";

function ShopBKHistoryPage() {
  return (
    <>
      {/* <ShopNavBar /> */}
      <NavBar />
      <ShopBookingHistory />
    </>
  );
}

export default ShopBKHistoryPage;
