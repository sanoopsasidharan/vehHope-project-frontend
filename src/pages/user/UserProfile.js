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
  const [isImage, setisImage] = useState(false);

  const gettingUserData = () => {
    axios
      .post("/userProfile")
      .then(async (result) => {
        console.log(result);
        await setUser((user) => result.data);
        if (!result.data.image === "fales") await setisImage((isImage) => true);
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
        <UserDetails
          user={user}
          isImage={isImage}
          gettingUserData={gettingUserData}
        />
      </div>
    </>
  );
}

export default UserProfile;
