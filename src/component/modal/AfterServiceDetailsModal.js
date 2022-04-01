import { Box, Button, makeStyles, Modal } from "@material-ui/core";
import React from "react";

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
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
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
    backgroundColor: "blue",
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      backgroundColor: "blue",
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
  headingHrTag: {
    width: "70%",
  },
  mainContedDiv: {
    width: "50%",
  },
  spanTag: {
    display: "flex",
    alignItems: "center",
  },
  containor: {
    display: "flex",
    justifyContent: "center",
  },
  subContedDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  openModaldivtag: {
    display: "flex",
    marginRight: "10px",
  },
}));
function AfterServiceDetailsModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.openModaldivtag}>
        <Button
          variant="contained"
          className={classes.openModalPtag}
          onClick={handleOpen}
        >
          Service Note
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
            <hr className={classes.headingHrTag} />
          </div>
          <div className={classes.containor}>
            <div className={classes.mainContedDiv}>
              <div className={classes.subContedDiv}>
                <span className={classes.spanTag}>Next Service :</span>
                <h4> {item.servieNote?.nextServiceKm}</h4>
              </div>
              <div className={classes.subContedDiv}>
                <span className={classes.spanTag}>Worker Name :</span>
                <h4> {item.servieNote?.workerName}</h4>
              </div>
              <div className={classes.subContedDiv}>
                <span className={classes.spanTag}>Price :</span>
                <h4> {item.servieNote?.price}</h4>
              </div>
              <div className={classes.subContedDiv}>
                <span className={classes.spanTag}>Service Discription :</span>
                <h4> {item.servieNote?.serviceDiscription}</h4>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AfterServiceDetailsModal;
