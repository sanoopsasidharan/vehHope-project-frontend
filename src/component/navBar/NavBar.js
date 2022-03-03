import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
  Badge,
} from "@material-ui/core";
import { Cancel, Mail, Search } from "@material-ui/icons";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLG: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSM: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "50%",
    [theme.breakpoints.down("sm")]: {
        display: (props)=> (props.open ? 'flex' : 'none'),
        width:'70%'
      }
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  searchIcon: {
    marginLeft: theme.spacing(2),
  },
  searchButton:{
    marginLeft:theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        display:'none'
    }
  },
  cancel:{
      [theme.breakpoints.up('sm')]:{
          display:'none'
      }

  },
  icons: {
      [theme.breakpoints.down('sm')]:{
          display:(props)=> (props.open ? 'none' : 'flex') 
      }
  },
  badge:{
      marginLeft:theme.spacing(2)
  }
}));

function NavBar() {
  const [open,setOpen] = useState(false)  
  const classes = useStyle({ open });
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLG}>
            VehHope
          </Typography>
          <Typography variant="h6" className={classes.logoSM}>
            V
          </Typography>
          <div className={classes.search}>
            <Search className={classes.searchIcon} />
            <InputBase placeholder="search . . . " className={classes.input} />
            <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
          </div>
          <div className={classes.icons}>
              <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
