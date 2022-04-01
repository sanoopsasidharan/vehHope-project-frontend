import { Box, Button, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useState } from "react";

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
    backgroundColor: "#bbbbbb",
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
    padding: "15px",
    borderRadius: "15px",
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
    padding: "8px",
    fontSize: "22px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#00c300",
    color: "white",
  },
  openModalDiv: {
    display: "flex",
    marginRight: "10px",
  },
}));
function RateingModal() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [nextServiceKm, setNextServiceKm] = useState();
  const [workerName, setWorkerName] = useState();
  const [serviceDiscription, setServiceDiscription] = useState();
  const [price, setPrice] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.openModalDiv}>
        <Button
          variant="contained"
          className={classes.openModalPtag}
          onClick={handleOpen}
        >
          + Rateing
        </Button>
      </div>
      <Modal
        className={classes.mainModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={classes.mainBox} sx={{ ...style }}>
          <div className={classes.mainHeadingDiv}>
            <h2>service note</h2>
          </div>
          <div>
            <form className={classes.formDiv}>
              <input
                className={classes.frominput}
                value={nextServiceKm}
                type={"number"}
                onChange={(e) => setNextServiceKm(e.target.value)}
                placeholder="Next Service Km"
              />
              <input
                className={classes.frominput}
                value={workerName}
                type={"text"}
                onChange={(e) => setWorkerName(e.target.value)}
                placeholder="Worker Name"
              />
              <input
                className={classes.frominput}
                value={price}
                type={"text"}
                placeholder="Service Discription"
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                className={classes.frominput}
                value={serviceDiscription}
                type={"text"}
                placeholder="Service Discription"
                onChange={(e) => setServiceDiscription(e.target.value)}
              />
              <button className={classes.submitButton} type="submit">
                submit
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default RateingModal;
