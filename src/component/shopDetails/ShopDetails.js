import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  divs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "550px",
  },
  shopImage: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "20px",
    objectFit: "cover",
    height: "550px",
  },
}));

function ShopDetails({ ShopData }) {
  const classes = useStyle();

  return (
    <div className={classes.divs}>
      <img className={classes.shopImage} src={`${ShopData.image}`} />
      <p>{ShopData.description}</p>
    </div>
  );
}

export default ShopDetails;
