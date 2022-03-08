import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllShops from "../pages/user/AllShops";
import Booking from "../pages/user/Booking";
import BookingHistory from "../pages/user/BookingHistory";
import CreateUserPage from "../pages/user/CreateUserPage";
import SignInPage from "../pages/user/SignInPage";
import UserHome from "../pages/user/UserHome";
import UserProfile from "../pages/user/UserProfile";
import CreateShopPage from "../pages/workShop/CreateShopPage";
import LoginShop from "../pages/workShop/LoginShop";
import ShopBKHistoryPage from "../pages/workShop/ShopBKHistoryPage";
import ShopProfilePage from "../pages/workShop/ShopProfilePage";

function PageRouters() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route exact path="/" element={<UserHome />} />
        <Route path="/shops" element={<AllShops />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookingHistory" element={<BookingHistory />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/create" element={<CreateUserPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        {/* shop routes */}
        <Route path="/createShop" element={<CreateShopPage />} />
        <Route path="/loginShop" element={<LoginShop />} />
        <Route
          exact
          path="/shopBookingHistory"
          element={<ShopBKHistoryPage />}
        />
        <Route exact path="/shopProfile" element={<ShopProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouters;
