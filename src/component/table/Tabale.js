import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import HistoryModal from "../modal/HistoryModal";
import { MdMessage } from "react-icons/md";

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
    shopName: "bz",
    date: "2/4/20",
    status: "canceled",
  },
  {
    shopName: "shopee",
    date: "10/4/20",
    status: "rejected",
  },
  {
    shopName: "carcare",
    date: "1/4/20",
    status: "pending",
  },
  {
    shopName: "bikerway",
    date: "12/4/20",
    status: "complete",
  },
];

function Tabale() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>shopName</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">contact</TableCell>
            <TableCell align="right">Details</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDetails.map((item) => (
            <TableRow
              key={item.shopName}
              sx={{
                "&:last-child td, &:last-child th": { border: 0, padding: 40 },
              }}
            >
              <TableCell component="th" scope="row">
                {item.shopName}
              </TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">
                <MdMessage />
              </TableCell>

              <TableCell align="right">
                <HistoryModal />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabale;
