import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./ShopPost.css";

function ShopPost() {
  const show = () => alert("showing");
  return (
    <Card onClick={show} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="green iguana"
        />
        <CardContent>
          <div className="shopPostDetails">
            <h3>Carcare</h3>
            <h3>kunnamkulam</h3>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShopPost;
