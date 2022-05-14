import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ShopPost from "../../component/shops/ShopPost";
import Footer from "../../component/footer/Footer";
import NavigationBar from "../../component/navBar/NavigationBar";
import GlobalContext from "../../store/GlobalContextProvider";
import axios from "../../axios";
import AllShopPost from "../../component/shops/AllShopPost";

const useStyle = makeStyles((theme) => ({
  gridMain: {
    marginTop: 90,
  },
}));
function AllShops() {
  const classes = useStyle();
  const { findShop, settingFindShopData } = useContext(GlobalContext);
  const [mostTopShops, setMostTopShops] = useState([]);
  const [shops, setshops] = useState(false);
  useEffect(() => {
    handleFindingShop();
  }, []);

  const handleFindingShop = () => {
    const { longitudeState, lantitudeState, kmValue } = findShop;
    axios
      .post("/shop/topShops", { longitudeState, lantitudeState, kmValue })
      .then((result) => {
        console.log(result);
        setMostTopShops(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavigationBar />
      <Container>
        {shops ? (
          <Grid container className={classes.gridMain} spacing={4}>
            <>
              {mostTopShops?.map((item, index) => (
                <Grid className={classes.itemGrid} item xs={12} md={3}>
                  <AllShopPost item={item} index={index} />
                </Grid>
              ))}
            </>
          </Grid>
        ) : (
          <div
            style={{
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              marginTop: "105px",
              alignItems: "center",
            }}
          >
            <h1>No shop in the location </h1>
          </div>
        )}
      </Container>

      {/* <Footer /> */}
    </>
  );
}

export default AllShops;
