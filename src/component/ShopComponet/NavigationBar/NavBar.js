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
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerCom from "../../navBar/DrawerCom";
import AuthContext from "../../../store/AuthContextProvider";
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
  sample: {
    color: "red",
  },
}));

function NavBar() {
  const { userlogged, setuserDetails, getUserLogged, userDetails } =
    useContext(AuthContext);
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
          <Typography className={classes.mainHead}>VEHHOPE</Typography>
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
                <div className={classes.nav_booking_modal_button}></div>
                <Link className={classes.allLinks} to="/shopBookingHistory">
                  <Tab label="History" />
                </Link>
                <Link className={classes.allLinks} to="/">
                  <Tab label="message" />
                </Link>
              </Tabs>
              <Toolbar className={classes.loginButton}>
                <p className={classes.sample}>{auth}</p>
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
                      <Link className={classes.allLinks} to="/shopProfile">
                        <p className={classes.leftPtag}>Profile</p>
                      </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
