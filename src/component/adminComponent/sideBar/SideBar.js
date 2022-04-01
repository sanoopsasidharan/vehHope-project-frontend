import { LineStyle } from "@material-ui/icons";
import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
