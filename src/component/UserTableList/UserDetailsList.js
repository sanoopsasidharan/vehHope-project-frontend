import { Box, Button, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { Link as Navigate } from "react-router-dom";
import "./UserDetailsList.css";

const useStyle = makeStyles((theme) => ({
  mainBOx: {
    display: "flex",
    flexDirection: "column",
  },
}));
function UserDetailsList() {
  const classes = useStyle();
  return (
    <Box className={classes.mainBOx}>
      <Button>
        <Navigate className="navigater" to="/">
          Home
        </Navigate>
      </Button>
      <Button>
        <Navigate className="navigater" to="/">
          edit profile
        </Navigate>
      </Button>
      <Button>
        <Navigate className="navigater" to="/">
          Home
        </Navigate>
      </Button>
      <Button>
        <Navigate className="navigater" to="/">
          Home
        </Navigate>
      </Button>
    </Box>
  );
}

export default UserDetailsList;
