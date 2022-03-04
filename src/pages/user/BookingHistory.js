import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HistoryList from "../../component/list/HistoryList";
import NavBar from "../../component/navBar/NavBar";
import NavigationBar from "../../component/navBar/NavigationBar";

const useStyle = makeStyles((theme) => ({
  mainBody: {
    marginTop: "75px",
  },
}));

function BookingHistory() {
  const classes = useStyle();
  return (
    <>
      <Grid container>
        <NavigationBar />
        <Grid className={classes.mainBody} item xs={12} container>
          <Grid item xs={12}>
            {/* <HistoryList />
            <HistoryList />
            <HistoryList />
            <HistoryList />
            <HistoryList /> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default BookingHistory;
