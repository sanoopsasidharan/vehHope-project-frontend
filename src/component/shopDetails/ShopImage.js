import { Box, Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";
import axios from "../../axios";
import "./ShopMainDetails.css";
import { AiFillStar } from "react-icons/ai";
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
  shopRating: {},
  mainRateingDiv: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 10px 0px 10px",
  },
}));

function ShopImage({ shopData, shop, reting }) {
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
      {/* <div className={classes.mainRateingDiv}>
        <div className={classes.shopRating}>
          {reting &&
            [...new Array(5)].map((j, i) =>
              i < reting ? (
                <AiFillStar style={{ color: "yellow" }} />
              ) : (
                <AiFillStar style={{ color: "grey" }} />
              )
            )}
        </div>
      </div> */}
      <div className={classes.mainRateingDiv}>
        <div className={classes.shopRating}>
          {reting
            ? [...new Array(5)].map((j, i) =>
                i < reting ? (
                  <AiFillStar style={{ color: "yellow" }} />
                ) : (
                  <AiFillStar style={{ color: "grey" }} />
                )
              )
            : [...new Array(5)].map((j, i) => (
                <AiFillStar style={{ color: "grey" }} />
              ))}
        </div>
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
