import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  divs: {
    display: "row",
    flexDirection: "row",
    width: "100%",
  },
  shopImage: {
    width: "100%",
  },
}));

function ShopDetails() {
  const classes = useStyle();

  return (
    <div className={classes.divs}>
      <img
        className={classes.shopImage}
        src="https://images.jdmagicbox.com/comp/hyderabad/e6/040pxx40.xx40.160929140909.e9e6/catalogue/vasudha-yamaha-sainikpuri-hyderabad-two-wheeler-part-dealers-yamaha-0lbgj8q6vl.jpg"
      />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown prinfmalkjfkjter took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default ShopDetails;
