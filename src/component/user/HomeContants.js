import { Container, Grid } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";

function HomeContants() {
  const [mostTopShops, setMostTopShops] = useState();

  const TopShops = () => {
    axios
      .post("/shop/topShops")
      .then((res) => {
        console.log(res);
        if (res.data) setMostTopShops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    TopShops();
  }, []);
  return (
    <div>
      <Grid>
        <Grid item sm={12}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Cards mostTopShops={mostTopShops} />
    </div>
  );
}

export default HomeContants;
