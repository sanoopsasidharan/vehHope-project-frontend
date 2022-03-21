import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@mui/material";
import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../store/AuthContextProvider";

// import { UserContext } from "../../store/UserContextProvider";

import "./UserDetails.css";
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
  },
  sideBarBox: {},
  tableItems: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: 400,
    fontFamily: "sans-serif",
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
    width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "50%",
    marginTop: 50,
    marginBottom: 50,
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
}));

function UserDetails({ user }) {
  // const { userDetails } = useContext(AuthContext);
  // const [user, setUser] = useState();
  // const { userDetail } = useContext(UserContext);

  // useEffect(() => {
  //   gettingData();
  // }, []);
  // const gettingData = async () => {
  //   alert("alfj");
  //   console.log("<><><>userdetail<><><>");
  //   console.log("................");
  //   const result = await axios.post("/userProfile", {
  //     userId: id,
  //   });
  // };
  const classes = useStyle();
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
                      booking History
                    </NavLink>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableItems}>
                    Edit address
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
                      src="data:image/jpeg;base64,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"
                    />
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
                <div className="RightUserDetails">
                  <p>{user && user.data.name}</p>
                  <p>{user && user.data.email}</p>
                  <p>{user && user.data.number}</p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(UserDetails);
