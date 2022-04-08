import {
  Box,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "../../axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapModal from "../modal/MapModal";
import ReactMapGl, { Marker } from "react-map-gl";
import { Button } from "@mui/material";
import { Room } from "@material-ui/icons";

// style
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: "24px",
    backgroundColor: "#ffffff",
    boxShadow: "5px 10px 50px #4a4a4a54",
    lineHeight: "3",
    padding: "30px",
    marginTop: "4vh",
    [theme.breakpoints.up("sm")]: {
      marginTop: "10vh",
    },
  },
  headingDiv: {
    display: "flex",
    justifyContent: "center",
  },
  mainHeding: {
    fontWeight: 700,
    fontSize: 30,
  },
}));

// form
function CreateForm() {
  const [lantitudeState, setLantitudeState] = useState("");
  const [longitudeState, setLongitudeState] = useState("");
  const [openMap, setOpenMap] = useState(false);

  const handleLandLongSetting = (land, long) => {
    setLantitudeState(land);
    setLongitudeState(long);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyle();
  const navigate = useNavigate();

  const submitForm = (e) => {
    const lantitude = lantitudeState.toString();
    const longitude = longitudeState.toString();
    e.preventDefault();
    console.log(name, email, number, location, password, lantitude, longitude);
    try {
      axios
        .post("/user_register", {
          name,
          email,
          number,
          place: location,
          password,
          lantitude,
          longitude,
        })
        .then((response) => {
          console.log("then");
          console.log(response.status);
          if (response.status == 200) {
            navigate("/login");
          }
        })
        .catch((err) => {
          if (!err?.response) {
            setErrorMessage(" no server responts");
          } else if (err.response?.status === 404) {
            setErrorMessage(" email taken");
          } else {
            setErrorMessage("registration failed");
          }
          console.log("catch");
          console.log(err);
          console.log(err.response?.status);
        });
    } catch (error) {}
  };

  return (
    <>
      <Container
        className={classes.mainContainer}
        component="main"
        maxWidth="xs"
      >
        <Box
          sx={{
            marginTop: 8,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <div className={classes.headingDiv}>
              <Typography
                className={classes.mainHeding}
                component="h1"
                variant="h5"
              >
                Sign Up
              </Typography>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="number"
              id="number"
              onChange={(e) => setNumber(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="name"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <MapModal
              handleLandLongSetting={handleLandLongSetting}
              lantitudeState={lantitudeState}
              longitudeState={longitudeState}
            />
            <Box marginTop={3}>
              <button
                className="submitbutton"
                onClick={submitForm}
                type="submit"
              >
                Submit
              </button>
            </Box>
            <p>{errorMessage}</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CreateForm;
