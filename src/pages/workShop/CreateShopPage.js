import { makeStyles } from "@material-ui/core";
import React from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import CreateShop from "../../createShop/CreateShop";
const useStyle = makeStyles((theme) => ({
  gridMain: {
    marginTop: 120,
  },
}));

function CreateShopPage() {
  const classes = useStyle();

  return (
    <>
      <NavigationBar />
      <div className={classes.gridMain}>
        <CreateShop />
      </div>
    </>
  );
}

export default CreateShopPage;
