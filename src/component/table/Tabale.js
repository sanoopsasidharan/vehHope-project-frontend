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
import ChangeingBKStatus from "../modal/ChangeingBKStatus";
import axios from "../../axios";
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
    // position: "sticky",
    // width: "100%",
  },
  sortingModal: {},
  whiteButton: {
    color: "white",
  },
  errorMessageClass: {
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

function Tabale() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [changeingState, setChangeingState] = useState(false);
  const [IfNoHistory, setIfNoHistory] = useState();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    // alert(anchorEl);
  };
  const findingDate = (value) => {
    setAnchorEl(null);
    axios
      .post("/user_history_InStatus", { status: value })
      .then((result) => {
        if (!result.data) alert("somthing error");
        if (result.data) setBookingHistory(result.data);
        if (result.data.length < 1)
          setIfNoHistory("No    " + value + "   items");
        else setIfNoHistory();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyle();

  useEffect(() => {
    handleHistory();
  }, [changeingState]);
  const handleHistory = () => {
    axios
      .post("/user_Booking_History")
      .then((result) => {
        console.log(result);
        setBookingHistory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <MenuItem onClick={() => findingDate("complete")}>
              complete
            </MenuItem>
            <MenuItem onClick={() => findingDate("rejected")}>
              rejected
            </MenuItem>
            <MenuItem onClick={() => findingDate("approved")}>
              approved
            </MenuItem>
            <MenuItem onClick={() => findingDate("cancel")}>cancel</MenuItem>
            <MenuItem onClick={() => findingDate("pending")}>pending</MenuItem>
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
                vehicle
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
            {bookingHistory &&
              bookingHistory.map((item, index) => (
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
                    {item.shop.shopName}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    {Moment(item.date).format("DD:MM:YYYY")}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    {item.status}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    {item.model}
                  </TableCell>
                  <TableCell className={classes.tableCellHead} align="right">
                    <MdMessage />
                  </TableCell>

                  <TableCell className={classes.tableCellHead} align="right">
                    {/* <HistoryModal /> */}
                    <ChangeingBKStatus
                      item={item}
                      setChangeingState={setChangeingState}
                      handleHistory={handleHistory}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {IfNoHistory && (
          <div className={classes.errorMessageClass}>
            <div className={classes.errorMessageSubDiv}>
              <h2>{IfNoHistory}</h2>
            </div>
          </div>
        )}
      </TableContainer>
    </Box>
  );
}

export default Tabale;
