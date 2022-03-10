// import { Box, Grid, makeStyles } from "@material-ui/core";
// import React, { useState } from "react";

// const useStyle = makeStyles((theme) => ({
//   mainGrid: {
//     display: "flex",
//   },
//   image: {
//     width: "100%",
//   },
//   userDetailsGrid: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "green",
//   },
//   userDetailsbox: {
//     backgroundColor: "red",
//   },
// }));

// function UserDetails() {
//   const [userDetails, setUserDetails] = useState();
//   const classes = useStyle();
//   return (
//     <>
//       <Grid className={classes.mainGrid} container>
//         <Grid item sx={12} md={6}>
//           <img
//             className={classes.image}
//             src="data:image/jpeg;base64,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
//          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"
//           />
//         </Grid>
//         <Grid className={classes.userDetailsGrid} item sx={12} md={6}>
//           <Box className={classes.userDetailsbox}>
//             <p>sanoop</p>
//             <p>sanoop@gmail.com</p>
//             <p>9846694307</p>
//             <p>maratham code thrissur</p>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserDetails;

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
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

function UserDetails() {
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
                <div className="rightDetails">
                  <p>Sanoopsasidharan</p>
                  <p>sanoop@gmailcom</p>
                  <p>9846674297</p>
                  <p>maratham code kunnamkulam</p>
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
