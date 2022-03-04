import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BookingForm from "../../component/bookingform/BookingForm";
import NavBar from "../../component/navBar/NavBar";
import ShopDetails from "../../component/shopDetails/ShopDetails";

const useStyle = makeStyles((theme) => ({
  mainBody: {
    marginTop: "70px",
  },
}));

function Booking() {
  const classes = useStyle();
  return (
    <>
      <Grid container>
        <Grid className={classes.mainBody} item xs={12} container>
          <NavBar />
          <Grid item xs={12} md={6}>
            <ShopDetails />
          </Grid>
          <Grid item xs={12} md={6}>
           <BookingForm/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Booking;
