import { makeStyles } from "@material-ui/core";
import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../../component/navBar/NavigationBar";
import UserDetails from "../../component/userDeatils/UserDetails";
import AuthContext from "../../store/AuthContextProvider";

const useStyle = makeStyles((theme) => ({
  subgrid: {
    display: "flex",
    justifyContent: "center",
  },
  mainGrid: {
    marginTop: "160px",
    paddingLeft: "12px",
  },
}));

function UserProfile() {
  const classes = useStyle();

  const [user, setUser] = useState();

  const gettingUserData = () => {
    axios
      .post("/userProfile")
      .then((result) => {
        console.log(result);
        setUser((user) => result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    gettingUserData();
  }, []);

  const sample = () => alert("use effect is working");

  return (
    <>
      <NavigationBar />
      <div className={classes.mainGrid}>
        <UserDetails user={user} />
      </div>
    </>
  );
}

export default UserProfile;
