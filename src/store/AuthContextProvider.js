import React, { createContext, useEffect, useState } from "react";
import axios from "../axios";
const AuthContext = createContext(null);

function AuthContextProvider(props) {
  const [userlogged, setUserlogged] = useState(true);
  const [userDetails, setuserDetails] = useState("");
  const [userData, setuserData] = useState(undefined);
  useEffect(() => {
    getUserLogged();
  }, [userlogged]);

  const getUserLogged = async () => {
    await axios
      .post("/isLoggedin")
      .then((resutl) => {
        if (resutl.data.user === false) setUserlogged(false);
        else setUserlogged(true);
        const userObj = resutl.data.payload;
        if (userObj) {
          setuserData(userObj);
        }
      })
      .catch((err) => {
        setUserlogged(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        userlogged,
        setuserDetails,
        userDetails,
        getUserLogged,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };