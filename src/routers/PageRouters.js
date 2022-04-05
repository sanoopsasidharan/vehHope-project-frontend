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
import ShopContext from "../store/ShopContextProvider";
import axios from "../axios";
import Sample from "../pages/user/Sample";
import ShopHomePage from "../pages/workShop/ShopHomePage";
import ShopDetailsPage from "../pages/user/ShopDetailsPage";
import AdminHome from "../pages/admin/AdminHome";
import UserMessagerPage from "../pages/user/UserMessagerPage";
import ShopMessagePage from "../pages/workShop/ShopMessagePage";
axios.defaults.withCredentials = true;

function PageRouters() {
  const { userlogged } = useContext(AuthContext);
  const { shopLoggedIn } = useContext(ShopContext);
  console.log(shopLoggedIn, "shopLoggedIn");
  console.log(userlogged, "userlogged in page");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserHome />} />
        {/* user routes */}
        {/* 
        <Route
          exact
          path="/"
          element={userlogged ? <UserHome /> : <Navigate to="/login" />}
        /> */}
        {/* <Route path="/" element={<UserHome />} /> */}
        <Route path="/shops" element={<AllShops />} />
        <Route
          path="/shopDetails"
          element={
            userlogged ? (
              <ShopDetailsPage shop={true} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/shopDetailsShop"
          element={
            userlogged ? (
              <ShopDetailsPage shop={false} />
            ) : (
              <Navigate to="/login" />
            )
          }
          df
        />

        <Route
          path="/booking"
          element={userlogged ? <Booking /> : <Navigate to="/login" />}
        />

        <Route
          path="/message"
          element={userlogged ? <UserMessagerPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/bookingHistory"
          element={userlogged ? <BookingHistory /> : <Navigate to="/login" />}
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
        <Route path="/sample" element={<Sample />} />

        {/* shop routes */}

        <Route
          path="/shop"
          element={
            shopLoggedIn ? <ShopHomePage /> : <Navigate to="/loginShop" />
          }
        />
        <Route
          path="/shopMessage"
          element={
            shopLoggedIn ? <ShopMessagePage /> : <Navigate to="/loginShop" />
          }
        />
        <Route path="/createShop" element={<CreateShopPage />} />
        <Route
          path="/loginShop"
          element={shopLoggedIn ? <Navigate to="/shop" /> : <LoginShop />}
        />
        <Route
          exact
          path="/shopBookingHistory"
          element={<ShopBKHistoryPage />}
        />
        <Route exact path="/shopProfile" element={<ShopProfilePage />} />

        {/* admin */}
        <Route exact path="/admin/home" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouters;
