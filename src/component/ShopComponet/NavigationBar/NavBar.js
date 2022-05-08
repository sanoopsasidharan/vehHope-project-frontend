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
import axios from "../../../axios";
import ShopContext from "../../../store/ShopContextProvider";
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
  const { shopLoggedIn, getShopLogged } = useContext(ShopContext);

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

  const handleLoggedOut = async () => {
    try {
      const shopLoggedOut = await axios.get("/shop/shopLoggedOut");
      getShopLogged();
      navigate("/loginShop");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Link className={classes.allLinks} to="/shop">
            <Typography className={classes.mainHead}>vehHope</Typography>
          </Link>
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
                <div className={classes.nav_booking_modal_button}></div>
                <Link className={classes.allLinks} to="/shopBookingHistory">
                  <Tab label="History" />
                </Link>

                <Link className={classes.allLinks} to="/shopMessage">
                  <Tab label="Message" />
                </Link>
                <Link className={classes.allLinks} to="/shopVideoCall">
                  <Tab label="Video Call" />
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

                    <MenuItem onClick={handleLoggedOut}>Log Out</MenuItem>
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
