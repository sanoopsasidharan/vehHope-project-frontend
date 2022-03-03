import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  divs: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
    width:'100%'
  },
  shopImage:{
    
  }
}));

function ShopDetails() {
  const classes = useStyle();

  return (
      
    <div className={classes.divs}>
      <img className={classes.shopImage} src="https://images.jdmagicbox.com/comp/hyderabad/e6/040pxx40.xx40.160929140909.e9e6/catalogue/vasudha-yamaha-sainikpuri-hyderabad-two-wheeler-part-dealers-yamaha-0lbgj8q6vl.jpg" />
    </div>
  );
}

export default ShopDetails;
