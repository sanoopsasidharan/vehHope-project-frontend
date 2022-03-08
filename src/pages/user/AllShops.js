import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ShopPost from "../../component/shops/ShopPost";
import Footer from "../../component/footer/Footer";
import NavigationBar from "../../component/navBar/NavigationBar";

const useStyle = makeStyles((theme) => ({
  gridMain: {
    marginTop: 90,
  },
}));
function AllShops() {
  const classes = useStyle();
  return (
    <>
      <NavigationBar />
      <Container>
        <Grid container className={classes.gridMain} spacing={4}>
          <Grid className={classes.itemGrid} item xs={12} md={3}>
            <ShopPost />
          </Grid>
          <Grid className={classes.itemGrid} item xs={12} md={3}>
            <ShopPost />
          </Grid>
          <Grid className={classes.itemGrid} item xs={12} md={3}>
            <ShopPost />
          </Grid>
          <Grid className={classes.itemGrid} item xs={12} md={3}>
            <ShopPost />
          </Grid>
          <Grid className={classes.itemGrid} item xs={12} md={3}>
            <ShopPost />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default AllShops;
