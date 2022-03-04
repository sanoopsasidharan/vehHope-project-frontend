import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllShops from "../pages/user/AllShops";
import Booking from "../pages/user/Booking";
import BookingHistory from "../pages/user/BookingHistory";
import UserHome from "../pages/user/UserHome";

function PageRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserHome/>} />
        <Route exact path="/shops" element={<AllShops />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/bookingHistory" element={<BookingHistory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default PageRouters;
