import { Button, List, ListItem, makeStyles } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import React from "react";
const useStyle = makeStyles((theme) => ({
  mainList: {
    display: "flex",
  },
  list: {
    justifyContent: "space-between",
  },
}));

function HistoryList() {
  const classes = useStyle();
  const show = () => {
    alert("open button");
  };

  return (
    <>
      <List className={classes.mainList} sx={{ width: "100%" }}>
        <ListItem className={classes.list} alignItems="center">
          f;lasjklddd ddddddddddddd
          <>
            <Phone />
            <Button onClick={show}>view</Button>
          </>
        </ListItem>
      </List>
    </>
  );
}

export default HistoryList;
