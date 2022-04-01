import { NotificationsNone } from "@material-ui/icons";
import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">VehHope</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
