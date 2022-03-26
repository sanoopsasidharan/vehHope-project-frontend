import {
  Box,
  Button,
  Grid,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./HistoryModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  pt: 1,
  px: 1,
  pb: 2,
  overflow: "scroll",
  height: "70vh",
};

const useStyle = makeStyles((theme) => ({
  mainBox: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  gridTagsAline: {
    width: "70%",

    padding: "0px 0px 0px 0px",
  },
  mainModal: {
    position: "relative",
  },
  closingButton: {
    position: "absolute",
    right: "2%",
  },
  mainDivandHead: {
    display: "flex",
    justifyContent: "center",
  },
  formClass: {
    display: "flex",
    justifyContent: "center",
  },
  HeadClass: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  serviceAddBTN: {
    backgroundColor: "blue",
    color: "white",
  },
  serviceItems: {
    border: "1px solid #3e3e3e3d",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px 0px 10px ",
    width: "70%",
  },
  serviceItemdeletebutton: {
    border: "0px",
  },
  serviceItemsMainDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  serviceSubmitButton: {
    display: "flex",
    justifyContent: "end",
    margin: "20px 20px 0px 0px",
  },
}));

function ServiceModal({ addservice }) {
  const [open, setOpen] = useState(false);
  const [input, setinput] = useState("");
  const classes = useStyle();
  const [Service, setService] = useState([]);

  const addingServices = (e) => {
    e.preventDefault();
    setService((Service) => [...Service, input]);
    setinput("");
  };

  const handleSubmitService = () => {
    alert(Service);
    addservice(Service);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="historyViweBtn"
        variant="contained"
        onClick={handleOpen}
      >
        Add your services
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
          <Grid container>
            <Grid className={classes.gridTagsAline} item xs={12}>
              <div className={classes.mainDivandHead}>
                <div>
                  <div className={classes.HeadClass}>
                    <h1>Add Your Service</h1>
                  </div>

                  <form className={classes.formClass} onSubmit={addingServices}>
                    <TextField
                      className={classes.inputfield}
                      name=""
                      type="text"
                      variant="outlined"
                      value={input}
                      onChange={(e) => setinput(e.target.value)}
                      label="Service Name"
                    />
                    <Button className={classes.serviceAddBTN} type="submit">
                      +
                    </Button>
                  </form>
                </div>
              </div>

              <div>
                {Service.map((item, index1) => (
                  <div key={index1} className={classes.serviceItemsMainDiv}>
                    <div className={classes.serviceItems}>
                      <h4>{item}</h4>
                      <Button
                        className={classes.serviceItemdeletebutton}
                        variant="outlined"
                        onClick={() =>
                          setService(
                            Service.filter((item2, index2) => {
                              if (index2 === index1) {
                                item2 = null;
                              }
                              return item2;
                            })
                          )
                        }
                      >
                        <Delete />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={classes.serviceSubmitButton}>
                <Button variant="outlined" onClick={handleSubmitService}>
                  submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ServiceModal;
