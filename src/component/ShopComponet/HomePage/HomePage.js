import { Container, Grid } from "@material-ui/core";
import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import Cards from "../../cards/Cards";

function HomePage() {
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
  const navigateTo = "/shopProfile";
  return (
    <div>
      <Grid>
        <Grid item sm={12}>
          <img
            style={{ width: "100%" }}
            src="https://res.cloudinary.com/dvz2vfssk/image/upload/v1647869054/vehHope/harley-davidson-eeTJKC_wz34-unsplash_jqsklf.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Cards navigateTo={navigateTo} mostTopShops={mostTopShops} />
    </div>
  );
}

export default HomePage;
