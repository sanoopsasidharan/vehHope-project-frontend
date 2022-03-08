import { Box, Button, Drawer, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const useStyle = makeStyles((theme) => ({
  sideBoard: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 20px 20px 20px",
  },
  sideBoardButton: {
    marginTop: 10,
  },
  mainDrawer: {},
}));

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
        <Box className={classes.sideBoard}>
          <Button className={classes.sideBoardButton}>Home</Button>
          <Button className={classes.sideBoardButton}>Message</Button>
          <Button className={classes.sideBoardButton}>History</Button>
        </Box>
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
