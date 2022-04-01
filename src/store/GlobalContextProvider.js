import React, { createContext, useState } from "react";
const GlobalContext = createContext(null);

function GlobalContextProvider(props) {
  const [shopId, setShopId] = useState();
  const [findShop, setfindShop] = useState("fucking shop");
  const settingFindShopData = async (
    longitudeState,
    lantitudeState,
    kmValue
  ) => {
    let lantitude = lantitudeState.toString();
    let longitude = longitudeState.toString();

    await setfindShop({
      longitudeState: longitude,
      lantitudeState: lantitude,
      kmValue,
    });
  };

  const settingShopId = (id) => {
    setShopId(id);
  };

  return (
    <GlobalContext.Provider
      value={{ shopId, settingShopId, findShop, settingFindShopData }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
