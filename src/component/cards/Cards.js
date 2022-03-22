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
  const handleNavigate = async (Id) => {
    await settingShopId(Id);
    navigate(navigateTo);
  };
  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          {mostTopShops?.map((item, index) => (
            <Grid item xs={12} md={4}>
              <Card
                onClick={() => handleNavigate(item._id)}
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${item.image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div className="shopPostDetails">
                      <h3>{item.shopName}</h3>
                      <h3>{item.location}</h3>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Cards;