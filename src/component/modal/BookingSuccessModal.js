import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const useStyle = makeStyles((theme) => ({
  mainHeadDiv: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  buttonsMainDiv: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));
function BookingSuccessModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const classes = useStyle();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.mainHeadDiv}>
            <h2>Booking Successful Completed</h2>
          </div>
          <div className={classes.buttonsMainDiv}>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              color="secondary"
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/bookingHistory")}
              variant="contained"
              color="success"
            >
              History
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BookingSuccessModal;
