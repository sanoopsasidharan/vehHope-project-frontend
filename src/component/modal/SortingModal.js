import {
  Box,
  Button,
  Grid,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

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
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  },
  sortingButton: {
    display: "flex",
    justifyContent: "right",
    backgroundColor: "red",
    marginTop: 10,
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
    fontFamily: "Arial,sans-serif",
    fontWeight: "bold",
  },
  mainModal: {
    position: "relative",
  },
  closingButton: {
    position: "absolute",
    right: "2%",
  },
  inputlabel: {
    fontFamily: "Arial,sans-serif",
  },
  buttonHead: {
    color: "white",
  },
}));

function SortingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const alertShow = () => {
    alert("sorting data");
  };
  const classes = useStyle();

  return (
    <div>
      <Button className={classes.buttonHead} onClick={handleOpen}>
        Filter data
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
            Filter Data
          </h2>
          <Grid container>
            <Grid className={classes.itemGrid} item xs={12}>
              <p className={classes.inputlabel}>Start Date</p>
              <TextField
                className={classes.inputfield}
                name="startDate"
                type="date"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid className={classes.itemGrid} item xs={12}>
              <p className={classes.inputlabel}>End Date</p>
              <TextField
                className={classes.inputfield}
                name="endDate"
                type="date"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            className={classes.sortingButton}
            variant="contained"
            onClick={alertShow}
          >
            Sort
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default SortingModal;
