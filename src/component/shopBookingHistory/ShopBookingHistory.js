import {
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { MdMessage } from "react-icons/md";
import SortingModal from "../modal/SortingModal";
import axios from "../../axios";
import ViewBookingHistory from "../modal/ViewBookingHistory";
import Moment from "moment";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    margin: "80px 5px 0px 5px",
    [theme.breakpoints.up("md")]: {
      margin: "100px 80px 0px 80px",
    },
  },
  tableCellHead: {
    textAlign: "center",
    padding: "25px 15px 25px 15px",
    fontSize: "1rem",
  },
  sortingbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#68747A",
    padding: "10px 30px 10px 30px",
  },
  sortingModal: {},
  whiteButton: {
    color: "white",
  },
}));

function ShopBookingHistory() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [shopHistory, setShopHistory] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const gettingBookings = () => {
    axios
      .post("/shop/bookingHistory")
      .then((result) => {
        console.log(result);
        if (result.data) setShopHistory(result.data);
      })
      .catch((err) => {
        console.log(err);
        alert("just refresh your tab");
      });
  };

  useEffect(() => {
    gettingBookings();
  }, []);
  const classes = useStyle();
  return (
    <Box className={classes.mainBox} padding={3}>
      <Box className={classes.sortingbox}>
        <div className={classes.sortingModal}>
          <SortingModal />
        </div>
        <div>
          <Button className={classes.whiteButton} onClick={handleMenu}>
            status
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>complete</MenuItem>
            <MenuItem onClick={handleClose}>rejected</MenuItem>
            <MenuItem onClick={handleClose}>approved</MenuItem>
            <MenuItem onClick={handleClose}>pending</MenuItem>
          </Menu>
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead}>User Name</TableCell>
              <TableCell className={classes.tableCellHead} align="right">
                Date
              </TableCell>
              <TableCell className={classes.tableCellHead} align="right">
                Status
              </TableCell>
              <TableCell className={classes.tableCellHead} align="right">
                contact
              </TableCell>
              <TableCell className={classes.tableCellHead} align="right">
                Details
              </TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {shopHistory &&
              shopHistory.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      padding: 40,
                    },
                  }}
                >
                  <TableCell
                    className={classes.tableCellHead}
                    component="th"
                    scope="row"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    {Moment(item.date).format("DD:MM:YYYY")}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    {item.status}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    <MdMessage />
                  </TableCell>

                  <TableCell className={classes.tableCellHead} align="right">
                    <ViewBookingHistory
                      gettingBookings={gettingBookings}
                      item={item}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ShopBookingHistory;
