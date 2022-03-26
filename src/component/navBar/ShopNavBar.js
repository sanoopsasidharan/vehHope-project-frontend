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
import { Link } from "react-router-dom";
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
}));

function ShopNavBar() {
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
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.mainHead}>VehHopE</Typography>
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
                <Link className={classes.allLinks} to="/shop">
                  <Tab label="Home" />
                </Link>
                <Link className={classes.allLinks} to="/">
                  <Tab label="message" />
                </Link>
                <Link className={classes.allLinks} to="/shopBookingHistory">
                  <Tab label="History" />
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
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
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

export default ShopNavBar;
