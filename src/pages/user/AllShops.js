import React from "react";
import NavBar from "../../component/navBar/NavBar";
import { Grid, makeStyles } from "@material-ui/core";
import ShopPost from "../../component/shops/ShopPost";
import Footer from "../../component/footer/Footer";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  gridMain: {
    marginTop: "75px",
  },
}));
function AllShops() {
  const classes = useStyle();
  return (
    <>
      <NavBar />
      <Grid className={classes.gridMain} spacing={1} container>
        <Grid className={classes.itemGrid} item xs={12} sm={4} lg={3}>
          <ShopPost />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={4} lg={3}>
          <ShopPost />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={4} lg={3}>
          <ShopPost />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={4} lg={3}>
          <ShopPost />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AllShops;
