import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./HistoryModal.css";
import Moment from "moment";
import StatusModal from "./StatusModal";
import AfterServiceAddDetails from "./AfterServiceAddDetails";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  pt: 1,
  px: 1,
  pb: 2,
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  StatusModalComponent: {
    display: "flex",
    justifyContent: "right",
    marginLeft: "auto",
  },
  gridTagsAline: {
    width: "70%",

    padding: "0px 0px 0px 0px",
  },
  mainHeading: {
    display: "flex",
    justifyContent: "center",
  },
  mainModal: {
    position: "relative",
  },
  closingButton: {
    position: "absolute",
    right: "2%",
    top: "3.5%",
  },
  headTag: {
    color: "#000000bf",
  },
  leftSideDiv: {
    display: "flex",
    marginTop: "20px",
  },
  mainDivHeading: {
    display: "flex",
    justifyContent: "center",
  },
  mainContentDiv: {
    display: "flex",
    justifyContent: "center",
  },
  hrTag: {
    border: ".5px solid #0003",
    width: "70%",
  },
  mainDivHeadingTag: {
    margin: "22px 0px 8px 0px",
  },
}));

function ViewBookingHistory({ item, gettingBookings }) {
  const [open, setOpen] = React.useState(false);
  const [booingData, setBooingData] = useState();
  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const BookingCancel = () => {
    axios
      .post("/CancelBooking", { bookingId: item._id })
      .then(async (res) => {
        console.log(res);
        if (res.data) {
          await gettingBookings();
          setOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button
        className="historyViweBtn"
        variant="contained"
        onClick={handleOpen}
      >
        view
      </Button>
      <Modal
        className={classes.mainModal}
        open={open}
        onClose={handleClose1}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={classes.mainBox} sx={{ ...style }}>
          <ImCancelCircle
            className={classes.closingButton}
            onClick={handleClose1}
          />
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={classes.mainDivHeading}>
                <h4 className={classes.mainDivHeadingTag}>Details</h4>
              </div>
              <div>
                <hr className={classes.hrTag} />
              </div>
              <div className={classes.mainContentDiv}>
                <div className={classes.gridTagsAline}>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>name :</p>
                    <p>&ensp;{item.name}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>number :</p>
                    <p>&ensp;{item.number}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>location :</p>
                    {/* <p>&ensp;{item.location}</p> */}
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>complaint :</p>
                    <p>&ensp;{item.complaint}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>booking Date :</p>
                    <p>&ensp;{Moment(item.createTime).format("DD/MM/YYYY")}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>Service Date :</p>
                    <p>&ensp;{Moment(item.date).format("DD/MM/YYYY")}</p>
                  </div>

                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>model :</p>
                    <p>&ensp;{item.model}</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <div className={classes.mainDivHeading}>
                <h4 className={classes.mainDivHeadingTag}>Shop Details</h4>
              </div>
              <div>
                <hr className={classes.hrTag} />
              </div>

              <div className={classes.mainContentDiv}>
                <div className={classes.gridTagsAline}>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>Name :</p>
                    <p>&ensp;{item.shop.shopName}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>email :</p>
                    <p>&ensp;{item.shop.email}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>Number :</p>
                    <p>&ensp;{item.shop.number}</p>
                  </div>

                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>Location :</p>
                    {/* <p>&ensp;{item.shop.location}</p> */}
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>status :</p>
                    <p>&ensp;{item.status}</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.StatusModalComponent}>
            {item.status === "compelet" ? (
              <AfterServiceAddDetails
                handleClose1={handleClose1}
                id={item._id}
              />
            ) : (
              <StatusModal
                sx={{ backgroundColor: "green" }}
                handleClose1={handleClose1}
                gettingBookings={gettingBookings}
                item={item}
              />
            )}
            {/* {item.status === "cancel" ? <p></p> : <Button>cancel</Button>} */}
            {/* <StatusModal
              sx={{ backgroundColor: "green" }}
              handleClose1={handleClose1}
              gettingBookings={gettingBookings}
              item={item}
            /> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ViewBookingHistory;
