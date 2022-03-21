import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";
import DrawerCom from "./DrawerCom";
const useStyle = makeStyles((theme) => ({
  mainHead: {
    margin: "15px",
    fontSize: "30px",
    fontWeight: 600,
    fontFamily: "Lobster",
  },
  appbar: {
    backgroundColor: "#000000cf",
    padding: 7,
  },
  mainTabs: {
    marginLeft: "auto",
  },
  loginButton: {
    marginLeft: "auto",
  },
  allLinks: {
    color: "white",
    textDecoration: "none",
  },
  bookingModalLikn: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  leftPtag: {
    color: "black",
  },
  nav_booking_modal_button: {
    display: "flex",
    alignItems: "center",
  },
}));

function NavigationBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();
  const [value, setValue] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.mainHead}>vehHopE</Typography>
          {isMatch ? (
            <>
              <DrawerCom />
            </>
          ) : (
            <>
              <Tabs
                className={classes.mainTabs}
                textColor="inherit"
                value={value}
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                <Link className={classes.allLinks} to="/">
                  <Tab label="Home" />
                </Link>
                <div className={classes.nav_booking_modal_button}>
                  <BookingModal />
                </div>
                <Link className={classes.allLinks} to="/bookingHistory">
                  <Tab label="History" />
                </Link>
                <Link className={classes.allLinks} to="/">
                  <Tab label="message" />
                </Link>
              </Tabs>
              {/* <Button className={classes.loginButton} variant="contained">
                account
              </Button> */}
              <Toolbar className={classes.loginButton}>
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link className={classes.allLinks} to="/userProfile">
                          <p className={classes.leftPtag}>Profile</p>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
