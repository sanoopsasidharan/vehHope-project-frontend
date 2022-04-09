import { Box, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
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
    padding: "0px 10px 0px 10px",
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
    padding: "7px",
    fontSize: "20px",
    borderRadius: "10px",
    border: "0",
    backgroundColor: "#00c300",
    color: "white",
  },
}));
function ShopPasswordChange() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    axios
      .post("/shop/updatePassword", { oldPassword, newPassword })
      .then((result) => {
        toast.success("Update shop password");
        console.log(result);
        setOpen(false);
        setOldPassword("");
        setNewPassword("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Old password not match");
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ToastContainer />
      <p className={classes.openModalPtag} onClick={handleOpen}>
        Edit Password
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
            <h2>Edit Password</h2>
          </div>
          <div>
            <form className={classes.formDiv} onSubmit={handleSubmitFrom}>
              <input
                className={classes.frominput}
                value={oldPassword}
                placeholder="Old password"
                type={"password"}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={newPassword}
                placeholder="New password"
                type={"password"}
                onChange={(e) => setNewPassword(e.target.value)}
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

export default ShopPasswordChange;
