import { Box, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";

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
}));

function EditUserDetails({ user, gettingUserData }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {}, []);

  const handleOpen = () => {
    setName(user?.name);
    setNumber(user?.number);
    setemail(user?.email);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    axios
      .post("/update_userProfile", { number, name, email })
      .then(async (result) => {
        console.log(result);
        await gettingUserData();
        alert("update user details");
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        alert("somthing error");
      });
  };

  return (
    <div>
      <p className={classes.openModalPtag} onClick={handleOpen}>
        Edit User Details
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className={classes.frominput}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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

export default EditUserDetails;
