import {
  AppBar,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import DrawerCom from "./DrawerCom";
const useStyle = makeStyles((theme) => ({
  mainHead: {
    margin: "15px",
    fontSize: "30px",
  },
  appbar: {
    backgroundColor: "black",
  },
  mainTabs: {},
  loginButton: {
    marginLeft: "auto",
  },
}));

function NavigationBar() {
  const classes = useStyle();
  const [value, setValue] = useState();

  return (
    <div>
      <DrawerCom />
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.mainHead}>sanoop</Typography>
          <Tabs
            className={classes.mainTabs}
            textColor="inherit"
            value={value}
            indicatorColor="secondary"
            onChange={(e, value) => setValue(value)}
          >
            <Tab label="Home" />
            <Tab label="Booking" />
            <Tab label="History" />
            <Tab label="message" />
          </Tabs>
          <Button className={classes.loginButton} variant="contained">
            account
          </Button>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
