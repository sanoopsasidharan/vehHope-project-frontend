import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import Tabale from "../../component/table/Tabale";

// const useStyle = makeStyles((theme) => ({
//   mainBody: {
//     marginTop: "75px",
//   },
// }));

function BookingHistory() {
  // const classes = useStyle();
  return (
    <>
      <Grid container>
        <NavigationBar />
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Tabale />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default BookingHistory;
