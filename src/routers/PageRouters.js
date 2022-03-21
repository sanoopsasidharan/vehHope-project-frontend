import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import AuthContext from "../store/AuthContextProvider";
import axios from "../axios";
import Sample from "../pages/user/Sample";
axios.defaults.withCredentials = true;

function PageRouters() {
  const { userlogged } = useContext(AuthContext);
  console.log(userlogged, "userlogged in page");
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}

        <Route
          exact
          path="/"
          element={userlogged ? <UserHome /> : <Navigate to="/login" />}
        />
        {/* <Route path="/" element={<UserHome />} /> */}
        <Route path="/shops" element={<AllShops />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/bookingHistory"
          element={userlogged ? <BookingHistory /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={userlogged ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route path="/create" element={<CreateUserPage />} />
        <Route
          path="/userProfile"
          element={userlogged ? <UserProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/sample"
          element={userlogged ? <Sample /> : <Navigate to="/login" />}
        />

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
