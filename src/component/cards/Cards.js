import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import ShopPost from "../shops/ShopPost";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";

function Cards({ navigateTo, mostTopShops }) {
  const { shopId, settingShopId } = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(mostTopShops);
  const handleNavigate = async (Id) => {
    await settingShopId(Id);
    navigate(navigateTo);
  };
  return (
    <div>
      <Container className="CardComponentContainer">
        <Grid container spacing={4}>
          {mostTopShops?.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <div
                onClick={() => handleNavigate(item._id)}
                className="cardComponentDiv"
              >
                <div className="cardComponentMainDiv">
                  <img className="cardComponentImage" src={`${item.image}`} />
                </div>
                <div className="cardComponentsubtextDiv">
                  <h3>
                    <span>Shop:&nbsp;</span>
                    {item?.shopName}
                  </h3>
                  <h3>
                    <span>Place:&nbsp;</span>
                    {/* {item?.location} */}
                  </h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Cards;
