import "./BookingModal.css";
import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useContext, useState } from "react";
import SliderButton from "../sliderButton/SliderButton";
import MapModal from "../modal/MapModal";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";

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
    backgroundColor: "#bbbbbb",
    border: "0%",
    borderRadius: "13px",
  },
  mainModal: {
    position: "relative",
  },
  openModalPtag: {
    fontSize: "16px",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "2px",
    padding: "15px",
  },
  frominput: {
    fontSize: "20px",
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
    padding: "12px",
    fontSize: "24px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#00c300",
    color: "white",
  },
  findShopBtn: {
    fontSize: "15px",
    width: "100%",
    padding: "8px",
    border: "0",
    color: "white",
    backgroundColor: "black",
    borderRadius: "9px",
    margin: "10px 0px 9px 0px",
  },
  modalMainDiv: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px 10px 0px",
  },
  findShopBtnDiv: {},
}));
function BookingModal() {
  const { findShop, settingFindShopData } = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [longitudeState, setLongitudeState] = useState("");
  const [lantitudeState, setLantitudeState] = useState("");
  const [kmValue, setKmValue] = useState();

  const navigate = useNavigate();

  const handleGetValue = (range) => {
    setKmValue(range);
  };

  const handleFindingShop = async () => {
    await settingFindShopData(longitudeState, lantitudeState, kmValue);
    navigate("/shops");
  };

  const handleLandLongSetting = (lant, long) => {
    setLongitudeState(long);
    setLantitudeState(lant);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p className={classes.openModalPtag} onClick={handleOpen}>
        <span className="bookingModal_btnspan"> Booking</span>
      </p>
      <Modal
        className={classes.mainModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={classes.mainBox} sx={{ ...style }}>
          <div className={classes.mainHeadingDiv}>
            <h2>FIND NEAREST SHOPS</h2>
          </div>
          <div>
            <SliderButton handleGetValue={handleGetValue} />
            <div className={classes.modalMainDiv}>
              <MapModal
                handleLandLongSetting={handleLandLongSetting}
                lantitudeState={lantitudeState}
                longitudeState={longitudeState}
              />
            </div>
            <div className={classes.findShopBtnDiv}>
              <button
                className={classes.findShopBtn}
                onClick={handleFindingShop}
              >
                Find Shop
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BookingModal;
