import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const useStyle = makeStyles((theme) => ({}));

function DrawerCom() {
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        className={classes.mainDrawer}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        style={{
          marginLeft: "auto",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <GiHamburgerMenu color="white" />
      </IconButton>
    </>
  );
}

export default DrawerCom;
