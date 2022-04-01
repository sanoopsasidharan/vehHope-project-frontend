import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import "./ShopPost.css";

function ShopPost({ mostTopShops }) {
  const show = () => alert("showing");
  return (
    <div>
      {mostTopShops?.map((item, index) => (
        <Card key={index} onClick={show} sx={{ maxWidth: 345 }}>
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
      ))}
    </div>
  );
}

export default ShopPost;
