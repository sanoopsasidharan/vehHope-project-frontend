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
import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import SortingModal from "../modal/SortingModal";
import ChangeingBKStatus from "../modal/ChangeingBKStatus";

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
    // position: "sticky",
    // width: "100%",
  },
  sortingModal: {},
  whiteButton: {
    color: "white",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "12/4/20", 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const bookingDetails = [
  {
    shopName: "kannan",
    date: "2/4/20",
    status: "canceled",
  },
  {
    shopName: "ammu",
    date: "10/4/20",
    status: "rejected",
  },
  {
    shopName: "achu",
    date: "1/4/20",
    status: "pending",
  },
  {
    shopName: "praveen",
    date: "12/4/20",
    status: "complete",
  },
];

function ShopBookingHistory() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    // alert(anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            {bookingDetails.map((item) => (
              <TableRow
                key={item.shopName}
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
                  {item.shopName}
                </TableCell>
                <TableCell className={classes.tableCellHead} align="right">
                  {item.date}
                </TableCell>
                <TableCell className={classes.tableCellHead} align="right">
                  {item.status}
                </TableCell>
                <TableCell className={classes.tableCellHead} align="right">
                  <MdMessage />
                </TableCell>

                <TableCell className={classes.tableCellHead} align="right">
                  {/* <HistoryModal /> */}
                  {/* <ChangeingBKStatus /> */}
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
