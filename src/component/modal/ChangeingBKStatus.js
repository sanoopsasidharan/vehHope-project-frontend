import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./HistoryModal.css";
import Moment from "moment";

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
  cancelButton: {
    display: "flex",
    justifyContent: "right",
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
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
}));

function ChangeingBKStatus({ item, setChangeingState, handleHistory }) {
  const [open, setOpen] = React.useState(false);
  const [booingData, setBooingData] = useState();
  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const BookingCancel = () => {
    axios
      .post("/CancelBooking", { bookingId: item._id })
      .then((res) => {
        setChangeingState(true);
        console.log(res);
        if (res.data) {
          handleHistory();
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
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={classes.mainBox} sx={{ ...style }}>
          <ImCancelCircle
            className={classes.closingButton}
            onClick={handleClose}
          />
          {/* <h2 className={classes.mainHeading} id="parent-modal-title">
            Booking details
          </h2> */}
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={classes.mainDivHeading}>
                <h4>details</h4>
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
                    <p>&ensp;{item.location}</p>
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
                <h4>shop details</h4>
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
                    <p>&ensp;{item.shop.location}</p>
                  </div>
                  <div className={classes.leftSideDiv}>
                    <p className={classes.headTag}>status :</p>
                    <p>&ensp;{item.status}</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {item.status === "cancel" ? (
            <p></p>
          ) : (
            <Button
              className={classes.cancelButton}
              variant="contained"
              onClick={BookingCancel}
            >
              cancel
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ChangeingBKStatus;
