import React from "react";
import Home from "../../component/adminComponent/CenterPages/Home/Home";
import SideBar from "../../component/adminComponent/sideBar/SideBar";
import TopBar from "../../component/adminComponent/topBar/TopBar";
import "./AdminHome.css";

function AdminHome() {
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default AdminHome;
