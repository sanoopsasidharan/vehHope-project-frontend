import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [UserLogged, setUserLogged] = useState();
  const [userDetail, setuserDetail] = useState();
  return (
    <UserContext.Provider value={{ userDetail, setuserDetail }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
