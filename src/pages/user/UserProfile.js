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
    marginTop: "85px",
  },
}));

function UserProfile() {
  const classes = useStyle();
  return (
    <>
      <NavigationBar />
      <Grid className={classes.mainGrid} container>
        <Grid item sx={12} md={3}>
          <UserDetailsList />
        </Grid>
        <Grid className={classes.subgrid} item sx={12} md={9}>
          <UserDetails />
        </Grid>
      </Grid>
    </>
  );
}

export default UserProfile;
