import { Box, Button, makeStyles, Modal, Typography } from "@material-ui/core";
import axios from "../../axios";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const useStyle = makeStyles((theme) => ({
  buttonDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  buttonPending: {
    backgroundColor: "yellow",
  },
  buttonCompelete: {
    backgroundColor: "green",
  },
  buttonApproved: {
    backgroundColor: "blue",
  },
  buttonRejected: {
    backgroundColor: "red",
  },
  modalOpenBtn: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

function StatusModal({ item }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const findingDate = (value) => {
    alert(value);
    axios
      .post("/shop/ChangeBookingStatus", { status: value, bookingId: item._id })
      .then((result) => {
        console.log(result.data.acknowledged);
        if(result.data.acknowledged){
            
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Button className={classes.modalOpenBtn} onClick={handleOpen}>
        {" "}
        Change Status{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Booking Status
          </Typography>
          <div className={classes.mainButtonDiv}>
            <div className={classes.buttonDiv}>
              <Button
                className={classes.buttonPending}
                variant="contained"
                onClick={() => findingDate("pending")}
              >
                pending
              </Button>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                className={classes.buttonApproved}
                variant="contained"
                onClick={() => findingDate("approved")}
              >
                approved
              </Button>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                className={classes.buttonCompelete}
                variant="contained"
                onClick={() => findingDate("compelete")}
              >
                compelete
              </Button>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                className={classes.buttonRejected}
                variant="contained"
                onClick={() => findingDate("rejected")}
              >
                rejected
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default StatusModal;
