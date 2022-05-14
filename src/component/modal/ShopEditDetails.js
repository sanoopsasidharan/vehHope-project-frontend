import { Box, makeStyles, Modal } from "@material-ui/core";
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
    margin: 0,
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
    padding: "10px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#00c300",
    color: "white",
  },
}));

function ShopEditDetails({ shopDetails, gettingShopDetials }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();

  const [shopName, setShopName] = useState();
  const [shopType, setShopType] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [state, setState] = useState();
  const [description, setDescription] = useState();

  const handleOpen = () => {
    setShopName(shopDetails?.shopName);
    setShopType(shopDetails?.shopType);
    setEmail(shopDetails?.email);
    setNumber(shopDetails?.number);
    setState(shopDetails?.state);
    setDescription(shopDetails?.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    axios
      .post("/shop/update_ShopProfile", {
        shopName,
        shopType,
        email,
        number,
        state,
        description,
      })
      .then(async (result) => {
        console.log(result);
        if (result.data) {
          alert("update user details");
          await gettingShopDetials();
          setOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("somthing error");
      });
  };

  return (
    <div>
      <p className={classes.openModalPtag} onClick={handleOpen}>
        Edit Shop Details
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
            <h2>Edit User Details</h2>
          </div>
          <div>
            <form className={classes.formDiv} onSubmit={handleSubmitFrom}>
              <input
                className={classes.frominput}
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={shopType}
                onChange={(e) => setShopType(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default ShopEditDetails;
