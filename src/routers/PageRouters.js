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

function PageRouters() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route exact path="/" element={<UserHome />} />
        <Route exact path="/shops" element={<AllShops />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/bookingHistory" element={<BookingHistory />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/create" element={<CreateUserPage />} />
        <Route exact path="/userProfile" element={<UserProfile />} />
        {/* shop routes */}
        <Route path="/createShop" element={<CreateShopPage />} />
        <Route path="/loginShop" element={<LoginShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouters;
