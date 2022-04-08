import { Box, Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";
import axios from "../../axios";
import "./ShopMainDetails.css";
const useStyle = makeStyles((theme) => ({
  divs: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "500px",
  },
  shopImage: {
    width: "90%",
    borderRadius: "10px",
    marginBottom: "20px",
    objectFit: "cover",
  },
}));

function ShopImage({ shopData, shop }) {
  const { settingShopId } = useContext(GlobalContext);
  const classes = useStyle();
  const navigate = useNavigate();

  const navigatingBooking = async () => {
    await settingShopId(shopData._id);
    navigate("/booking");
  };

  const handleSetMessage = async () => {
    try {
      const getdata = await axios.post("/conversation", {
        receiverId: shopData._id,
      });
      console.log(getdata, "getdata");
      navigate("/message");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={classes.divs}>
        <img className={classes.shopImage} src={`${shopData?.image}`} />
      </div>
      {shop ? (
        <div className="shopDetailsButtons">
          <button onClick={handleSetMessage} className="UserBookingBTN">
            {" "}
            Contact
          </button>
          <button onClick={navigatingBooking} className="UserBookingBTN">
            Booking
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default ShopImage;
