import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import SampleNavbar from "../../component/navBar/SampleNavbar";
import UserDetails from "../../component/userDeatils/UserDetails";
import UserDetailsList from "../../component/UserTableList/UserDetailsList";

const useStyle = makeStyles((theme) => ({
  subgrid: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  mainGrid: {
    marginTop: "110px",
    paddingLeft: "12px",
  },
}));

function UserProfile() {
  const classes = useStyle();
  return (
    <>
      <NavigationBar />
      <div className={classes.mainGrid}>
        <UserDetails />
      </div>
    </>
  );
}

export default UserProfile;
