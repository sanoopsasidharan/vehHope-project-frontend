import { Box, Button, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useState } from "react";
import RateingSliderBTN from "../sliderButton/RateingSliderBTN";

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
    marginTop: "10px",
    marginLeft: "auto",
    cursor: "pointer",
    // color: "white",
    // "&:hover": {
    //   backgroundColor: "green",
    // },
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
  headingH2Tag: {
    margin: "21px 0px 0px 0px",
  },
}));
function ShopOtpModal() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [OtpInput, setOtpInput] = useState(true);

  const handleVerifyNumber = () => {
    alert("this is number");
  };
  const handleVerifyOtp = () => {
    alert("this is otp");
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.openModalDiv}>
        <p className={classes.openModalPtag} onClick={handleOpen}>
          OTP login
        </p>
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
            <h2 className={classes.headingH2Tag}>TOP Login</h2>
          </div>
          <div>
            <form className={classes.formDiv}>
              <input
                className={classes.frominput}
                type={"number"}
                placeholder="Enter your number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {OtpInput ? (
                <>
                  <input
                    className={classes.frominput}
                    type={"number"}
                    placeholder="Enter OTP "
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button
                    onClick={handleVerifyOtp}
                    className={classes.submitButton}
                    type="submit"
                  >
                    Verify OTP
                  </button>
                </>
              ) : (
                <button
                  onClick={handleVerifyNumber}
                  className={classes.submitButton}
                  type="submit"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ShopOtpModal;
