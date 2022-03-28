import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@mui/material";
import axios from "../../axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EditPasswordModal from "../modal/EditPasswordModal";
import EditUserDetails from "../modal/EditUserDetails";
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
    height: "300px",
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
  propicDiv: {
    marginTop: "25px",
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

function UserDetails({ user, gettingUserData, isImage }) {
  const classes = useStyle();
  const [previewSource, setPreviewSource] = useState("");

  const handleSubmitProPic = (e) => {
    e.preventDefault();
    axios
      .post("update_userProPic", { image: previewSource })
      .then((result) => {
        console.log(result);
        alert("update user pro pic");
        gettingUserData();
        setPreviewSource("");
      })
      .catch((err) => {
        console.log(err);
        alert("somthing error");
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
                    <NavLink className="navigationLink" to="/bookingHistory">
                      booking History
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    <EditPasswordModal />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    <EditUserDetails
                      user={user}
                      gettingUserData={gettingUserData}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className={classes.tableItems}>
                    User feedBack
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
                      src={
                        user?.image ||
                        "https://res.cloudinary.com/dvz2vfssk/image/upload/v1648492162/vehHope/y8btpykclmmd9xrobwa6.png"
                      }
                    />
                    <div className={classes.propicDiv}>
                      <input onChange={handileFileInput} type="file" />
                      <button
                        className={classes.propicUploadBTN}
                        onClick={handleSubmitProPic}
                      >
                        upload
                      </button>
                    </div>
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
                    name: &nbsp;
                    <span>{user?.name}</span>
                  </h3>
                  <h3>
                    email: &nbsp;
                    <span>{user?.email}</span>
                  </h3>
                  <h3>
                    number: &nbsp;
                    <span>{user?.number}</span>
                  </h3>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default UserDetails;
