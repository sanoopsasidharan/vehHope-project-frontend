import { makeStyles } from "@material-ui/core";
import React from "react";
import ShopNavBar from "../../component/navBar/ShopNavBar";
import ShopProfile from "../../component/shopProfile/ShopProfile";

const useStyle = makeStyles((theme) => ({
  Container: {
    marginTop: 80,
    padding: "15px",
    backgroundColor: "#F5F5F5",
    height: "100vh",
  },
}));
function ShopProfilePage() {
  const classes = useStyle();
  return (
    <>
      <ShopNavBar />
      <div className={classes.Container}>
        <ShopProfile />
      </div>
    </>
  );
}

export default ShopProfilePage;
