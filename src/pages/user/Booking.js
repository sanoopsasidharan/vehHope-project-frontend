import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "../../component/navBar/NavBar";
import ShopDetails from "../../component/shopDetails/ShopDetails";

const useStyle = makeStyles((theme) => ({}));

function Booking() {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="xl">
        {/* <NavBar/> */}
        <Grid container>
          <Grid item xs={12} md={3}>
            <ShopDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <ShopDetails /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Booking;
