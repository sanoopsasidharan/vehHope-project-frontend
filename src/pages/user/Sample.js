import { Grid } from "@material-ui/core";
import React from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import SampleComp from "../../component/SampleComp";

function Sample() {
  return (
    <div>
      <NavigationBar />
      <Grid container>
        <Grid item sx={2}>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </Grid>
        <Grid item sx={2}>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sample;
