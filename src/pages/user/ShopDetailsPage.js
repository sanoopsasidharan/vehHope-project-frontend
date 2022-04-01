import { Button, Grid, makeStyles } from "@material-ui/core";
import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import ShopImage from "../../component/shopDetails/ShopImage";
import ShopMainDetails from "../../component/shopDetails/ShopMainDetails";
import GlobalContext from "../../store/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/ShopComponet/NavigationBar/NavBar";
const useStyle = makeStyles((theme) => ({
  mainContinarDiv: {
    padding: "110Px 10px 0px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "110Px 10px 10px 10px",
    },
  },

  SubContainerDiv: {
    padding: "0px 15px 0px 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 15px 0px 15px",
    },
  },
}));

function ShopDetailsPage({ shop }) {
  const { shopId } = useContext(GlobalContext);
  const [shopData, setShopData] = useState();
  const classes = useStyle();
  const navigate = useNavigate();
  const gettingData = async () => {
    alert(shopId);
    if (shopId === undefined) navigate("/");
    await axios
      .post("/view_Shop", { shopId })
      .then((result) => {
        if (!result.data) setShopData("");
        setShopData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <>
      {/* <NavigationBar /> */}
      {shop ? <NavigationBar /> : <NavBar />}

      <div className={classes.mainContinarDiv}>
        <Grid container>
          <Grid className={classes.mainBody} item xs={12} container>
            <Grid className={classes.SubContainerDiv} item xs={12} md={6}>
              <ShopImage shop={shop} shopData={shopData} />
            </Grid>
            <Grid className={classes.SubContainerDiv} item xs={12} md={6}>
              <ShopMainDetails shopData={shopData} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
    // <>
    //   <UserShopProfil />
    // </>
  );
}

export default ShopDetailsPage;
