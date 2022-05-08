import { Box, Button, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  border: "0",
  pt: 1,
  px: 1,
  pb: 2,
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    th: "40%",
    [theme.breakpoints.down("md")]: {
      th: "90%",
    },
    backgroundColor: "white",
    border: "0%",
    borderRadius: "13px",
  },
  mainModal: {
    position: "relative",
  },
  openModalPtag: {
    fontSize: "16px",
    marginBottom: "10px",
    backgroundColor: "green",
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "2px",
    padding: "15px",
  },
  frominput: {
    fontSize: "15px",
    border: "0",
    padding: "12px",
    borderRadius: "15px",
    backgroundColor: "#ededed",
    margin: "10px 0px 10px 0px",
  },
  mainHeadingDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    color: "#323030",
  },
  submitButton: {
    marginTop: "11px",
    padding: "7px",
    fontSize: "20px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#00c300",
    color: "white",
  },
  openModalDiv: {
    display: "flex",
    marginRight: "10px",
  },
  RateingNumberDiv: {
    backgroundColor: "#f1f1f1",
    border: "0",
    margin: "10px 0px 10px 0px",
    padding: "12px",
    fontSize: "15px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  h3Tag: {
    color: "#484848",
  },
}));
function AnswerCallModal({ modelHeader, AcceptCall }) {
  const [open, setOpen] = useState(true);
  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <div className={classes.openModalDiv}>
        <Button
          variant="contained"
          className={classes.openModalPtag}
          onClick={handleOpen}
        >
          + Rateing
        </Button>
      </div> */}

      <Modal
        className={classes.mainModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={classes.mainBox} sx={{ ...style }}>
          <div className={classes.mainHeadingDiv}>
            <h2>{modelHeader}</h2>
          </div>
          <div>
            <ToastContainer />
            <div>
              <Button onClick={handleClose}>Reject</Button>
              <Button onClick={AcceptCall}>Answer the call</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AnswerCallModal;
