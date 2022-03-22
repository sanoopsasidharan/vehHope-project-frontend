import React, { createContext, useState } from "react";
const GlobalContext = createContext(null);

function GlobalContextProvider(props) {
  const [shopId, setShopId] = useState();

  const settingShopId = (id) => {
    setShopId(id);
  };

  return (
    <GlobalContext.Provider value={{ shopId, settingShopId }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
