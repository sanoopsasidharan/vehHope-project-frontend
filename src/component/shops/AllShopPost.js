import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";
import "./ShopPost.css";

function AllShopPost({ item, index }) {
  const navigate = useNavigate();
  const { shopId, settingShopId } = useContext(GlobalContext);

  const show = () => {
    settingShopId(item._id);
    navigate("/shopDetails");
  };
  return (
    <div>
      <Card onClick={show} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <div className="shopPostDetails">
              {/* <h3>{item.shopName}</h3>
                    <h3>{item.location}</h3> */}

              <h1>{item.shopName}</h1>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default AllShopPost;
