import { makeStyles } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
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
  const [shopDetails, setShopDetails] = useState();

  const gettingShopDetials = () => {
    axios
      .post("/shop/shop_profile")
      .then((result) => {
        console.log(result, "result");
        if (!result.data) setShopDetails("");
        setShopDetails(result.data);
      })
      .catch((err) => {
        console.log("this is fucking catch method");
        console.log(err);
        setShopDetails("");
      });
  };
  useEffect(() => {
    gettingShopDetials();
  }, []);
  return (
    <>
      <NavBar />
      <div className={classes.Container}>
        <ShopProfile
          shopDetails={shopDetails}
          gettingShopDetials={gettingShopDetials}
        />
      </div>
    </>
  );
}

export default ShopProfilePage;
