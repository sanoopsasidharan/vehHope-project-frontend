import { Container, Grid } from "@material-ui/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import "./HomeContants.css";
import ServiceCard from "../serviceCards/ServiceCard";

function HomeContants({ navigateTo }) {
  const [mostTopShops, setMostTopShops] = useState();

  const TopShops = () => {
    axios
      .post("/find_allShops")
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
      {/* <Grid>
        <Grid item sm={12}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </Grid>
      </Grid> */}
      <div className="homePage_Banner_div">
        <img
          className="homePage_Banner_Image"
          src="https://res.cloudinary.com/dvz2vfssk/image/upload/v1648096459/banner/k42mcPb-yamaha-r1-wallpapers_1_2_x8j68r.jpg"
          alt=""
        />
        <div className="homePage_Banner_Image_HeadTag">
          <h1>Find your best choice</h1>
          <a href="#mostratingCards">
            <button className="homePage_Banner_Image_HeadTagButton">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Show more
            </button>
          </a>
        </div>
      </div>
      {/* <div className="serviceCardsSession">
        <div className="serviceCardsDiv">
          <ServiceCard />
        </div>
      </div> */}
      <div id="mostratingCards">
        <div className="mostratingCardsHeadDiv">
          <h1> SHOPS</h1>
        </div>
        <Cards navigateTo={navigateTo} mostTopShops={mostTopShops} />
      </div>
      <div className="homePage_Banner_div">
        <img
          className="homePage_Banner_second_Image"
          src="https://res.cloudinary.com/dvz2vfssk/image/upload/v1648524192/banner/stock-vector-auto-repair-shop-vector-illustration-558236899_1_1_a46kpa.jpg"
          alt=""
        />
        <div className="homePage_Banner_Image_HeadTag">
          <h1>Find your best choice</h1>
          <a href="#mostratingCards">
            <button className="homePage_Banner_Image_HeadTagButton">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Show more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeContants;
