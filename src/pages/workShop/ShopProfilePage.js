import { makeStyles } from "@material-ui/core";
import React from "react";
import ShopNavBar from "../../component/navBar/ShopNavBar";
import NavBar from "../../component/ShopComponet/NavigationBar/NavBar";
import ShopProfile from "../../component/shopProfile/ShopProfile";

const useStyle = makeStyles((theme) => ({
  Container: {
    marginTop: 90,
    padding: "15px",
    backgroundColor: "#F5F5F5",
    height: "100vh",
  },
}));
function ShopProfilePage() {
  const classes = useStyle();
  return (
    <>
      <NavBar />
      <div className={classes.Container}>
        <ShopProfile />
      </div>
    </>
  );
}

export default ShopProfilePage;
