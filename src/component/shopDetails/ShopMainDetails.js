import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import "./ShopMainDetails.css";

import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  bookingHead: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  bookingHeaderLetter: {
    marginTop: "30px",
    fontWeight: 500,
  },
  subDivDetails: {
    // width: "50%",
    padding: "0px 10px 0px 0px",
    display: "flex",
    justifyContent: "center",
    // [theme.breakpoints.down("sm")]: {
    //   width: "80%",
    // },
  },
  mainDivDetails: {
    display: "flex",

    justifyContent: "center",
  },
}));

function ShopMainDetails({ shopData }) {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.bookingHead}>
          <Typography className={classes.bookingHeaderLetter} variant="h3">
            Car care
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.mainDivDetails}>
              <div className={classes.subDivDetails}>
                <div className="smallDivinShopDetsils">
                  <h3>
                    name :&ensp; <span>{shopData?.shopName}</span>
                  </h3>
                  <h3>
                    eamil :&ensp; <span>{shopData?.email}</span>
                  </h3>
                  <h3>
                    category :&ensp; <span>{shopData?.shopType}</span>
                  </h3>

                  <h3>
                    number :&ensp; <span>{shopData?.number}</span>
                  </h3>

                  {/* <h3>
                    location :&ensp; <span>{shopData?.location}</span>
                  </h3> */}

                  <h3>
                    state :&ensp; <span>{shopData?.state}</span>
                  </h3>

                  <h3>
                    eamil :&ensp; <span>{shopData?.email}</span>
                  </h3>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ShopMainDetails;
