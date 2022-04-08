import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@mui/material";
import "./ShopProfile.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShopEditDetails from "../modal/ShopEditDetails";
import { CircularProgress } from "@material-ui/core";
import axios from "../../axios";
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    // [theme.breakpoints.up("sm")]: {},
  },
  sideBarBox: {
    // backgroundColor: "green",
  },
  tableItems: {
    // backgroundColor: "red",
    textAlign: "center",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#cabedd",
      color: "white",
    },
  },
  rightBar: {
    backgroundColor: "#ffffff",
    height: "400px",
    display: "flex",
    justifyContent: "center",
  },
  rightGrid: {},
  profileImage: {
    width: "50%",
    marginTop: 40,
    borderRadius: 5,
    // order: 1,
  },
  sideBarOptions: {
    // order: 2,
  },
  mainImage: {
    width: "90%",
    borderRadius: 5,
    marginTop: 30,
    height: "400px",
    objectFit: "cover",
  },
  rightBox: {
    backgroundColor: "white",
    display: "flex",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0px 2px 15px #b9b9b959",
  },
  rightDetails: {
    backgroundColor: "green",
    width: "50%",
    alignItems: "center",
  },
  uploadMainDiv: {
    marginTop: "20px",
  },
  propicUploadBTN: {
    backgroundColor: "#014c06",
    color: "white",
    border: "0",
    fontSize: "13px",
    borderRadius: "4px",
    padding: "8px",
  },
}));

function ShopProfile({ shopDetails, gettingShopDetials }) {
  const classes = useStyle();
  const [loader, setLoader] = useState(false);
  const [previewSource, setPreviewSource] = useState("");

  const handleSubmitProPic = (e) => {
    e.preventDefault();
    setLoader(true);
    axios
      .post("/shop/updateShop_pic", { image: previewSource })
      .then((result) => {
        console.log(result);
        alert("update user pro pic");
        setPreviewSource("");
        gettingShopDetials();
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        alert("somthing error");
        setLoader(false);
      });
  };

  const handileFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <>
      <Grid className="mainContainer" spacing={4} container>
        <Grid className="sideBarOptions" item xs={12} md={3}>
          <TableContainer component={Paper}>
            <Table
              className={classes.sideBarBox}
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableBody>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    <NavLink
                      className="navigationLink"
                      to="/shopBookingHistory"
                    >
                      Booking History
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    <ShopEditDetails
                      gettingShopDetials={gettingShopDetials}
                      shopDetails={shopDetails}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    User FeedBack
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box className={classes.rightBox}>
            <Grid container>
              <Grid sx={{ textAlign: "center" }} item xs={12} md={6}>
                <div>
                  <div>
                    <img
                      className={classes.mainImage}
                      src={`${shopDetails?.image}`}
                    />
                  </div>
                  <div className={classes.uploadMainDiv}>
                    <input onChange={handileFileInput} type="file" />
                    {loader ? (
                      <CircularProgress />
                    ) : (
                      <button
                        className={classes.propicUploadBTN}
                        onClick={handleSubmitProPic}
                      >
                        upload
                      </button>
                    )}
                  </div>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                item
                xs={12}
                md={6}
              >
                <div className="rightDetails">
                  <h3>
                    Shop Name: &nbsp;
                    <span>{shopDetails?.shopName}</span>
                  </h3>
                  <h3>
                    Shop Category: &nbsp;
                    <span>{shopDetails?.shopType}</span>
                  </h3>
                  <h3>
                    Email: &nbsp;
                    <span>{shopDetails?.email}</span>
                  </h3>
                  <h3>
                    Number: &nbsp;
                    <span>{shopDetails?.number}</span>
                  </h3>
                  <h3>
                    Location: &nbsp;
                    <span>{shopDetails?.state}</span>
                  </h3>
                  <h3>
                    Owner Name: &nbsp;
                    <span>{shopDetails?.user.name}</span>
                  </h3>
                  <h3>
                    Owner Email: &nbsp;
                    <span>{shopDetails?.user.email}</span>
                  </h3>
                  <h3>
                    Owner Number: &nbsp;
                    <span>{shopDetails?.user.number}</span>
                  </h3>
                  <h5>
                    Shop Description: &nbsp;
                    <span> {shopDetails?.description}</span>
                  </h5>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ShopProfile;
