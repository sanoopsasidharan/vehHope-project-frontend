import { Container, Grid, makeStyles } from "@material-ui/core";
import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import BookingForm from "../../component/bookingform/BookingForm";
import NavigationBar from "../../component/navBar/NavigationBar";
import ShopDetails from "../../component/shopDetails/ShopDetails";
import GlobalContext from "../../store/GlobalContextProvider";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  mainContinarDiv: {
    padding: "110Px 10px 50px 50px",
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

function Booking() {
  const { shopId } = useContext(GlobalContext);
  const classes = useStyle();
  const [ShopData, setShopData] = useState("");

  const navigate = useNavigate();

  const gettingData = async () => {
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
      <NavigationBar />
      <div className={classes.mainContinarDiv}>
        <Grid container>
          <Grid className={classes.mainBody} item xs={12} container>
            <Grid className={classes.SubContainerDiv} item xs={12} md={5}>
              <ShopDetails ShopData={ShopData} />
            </Grid>
            <Grid className={classes.SubContainerDiv} item xs={12} md={7}>
              <BookingForm ShopData={ShopData} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Booking;
