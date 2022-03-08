import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./HistoryModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
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
    display: "flex",
    justifyContent: "center",
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
}));

function HistoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const alertShow = () => {
    alert("booking cancel");
  };
  const classes = useStyle();
  const [bookingDetails, setBookingDetails] = useState({});

  const details = {
    name: "sanoop",
    email: "sanoop@gmail.com",
    number: "1111111111",
    date: "12 / 3 / 2000",
    address: "adattu H marathamcode po",
    company: "yamaha",
    model: "fz",
    compaint: "no running condition",
    status: "pending",
    state: "kerala",
    location: "kunnamkulam",
    landmark: "marathamcode school",
    workshop: "name",
    shoplocation: "pannithadam",
    shopNumber: "983773772372",
    ownerName: "kannan",
  };
  useEffect(() => {
    gettingData();
  }, []);

  const gettingData = () => {
    setBookingDetails(details);
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
          <h2 className={classes.mainHeading} id="parent-modal-title">
            Booking details
          </h2>
          <Grid container>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.name}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.email}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.number}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.location}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.date}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.workshop}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.shoplocation}</p>
            </Grid>
            <Grid className={classes.gridTagsAline} item xs={12} md={6}>
              <p>{bookingDetails.status}</p>
            </Grid>
          </Grid>
          <Button
            className={classes.cancelButton}
            variant="contained"
            onClick={alertShow}
          >
            cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default HistoryModal;
