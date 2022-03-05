import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllShops from "../pages/user/AllShops";
import Booking from "../pages/user/Booking";
import BookingHistory from "../pages/user/BookingHistory";
import CreateUserPage from "../pages/user/CreateUserPage";
import SignInPage from "../pages/user/SignInPage";
import UserHome from "../pages/user/UserHome";

function PageRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserHome />} />
        <Route exact path="/shops" element={<AllShops />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/bookingHistory" element={<BookingHistory />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/create" element={<CreateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouters;
