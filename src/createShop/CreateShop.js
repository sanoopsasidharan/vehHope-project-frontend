import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./CreateShop.css";
import axios from "../axios";

const useStyle = makeStyles((theme) => ({
  itemGrid: {
    display: "flex",
    justifyContent: "center",
  },
  mainGrid: {
    marginTop: 20,
  },
  inputfield: {
    width: 364,
  },
  mainHead: {
    fontSize: 36,
    fontWeight: 600,
    marginTop: 10,
    marginLeft: 15,
  },
  container: {
    padding: 20,
    marginTop: 25,
    borderRadius: 20,
    boxShadow: "5px 7px 50px 10px rgba(0, 0, 0, 0.1)",
  },
  subHead: {
    fontWeight: 600,
    fontSize: 20,
    margin: "27px 0px 0px 15px",
  },
  submitbutton: {
    backgroundColor: "green",
    color: "white",

    "&:hover": {
      color: "black",
    },
  },
  submitbox: {
    display: "flex",
    justifyContent: "right",
  },
  inputImage: {
    textDecoration: "none",
  },
  imageDiv: {
    width: "30px",
    height: "10px",
  },
  ShopImage: {
    width: "140px",
  },
}));

function CreateShop() {
  const classes = useStyle();
  const [shopName, setShopName] = useState("");
  const [shopType, setShopType] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handileFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handileSubmit = async (e) => {
    e.preventDefault();
    console.log(previewSource);
    console.log(shopName, shopType, email, number, location, state);
    const result = await axios.post("/create_shop", {
      shopName,
      shopType,
      email,
      number,
      location,
      state,
      password,
      description,
      image: previewSource,
    });
  };
  return (
    <Container className={classes.container}>
      <form onSubmit={handileSubmit}>
        <Box>
          <Typography className={classes.mainHead}>Create shop</Typography>
          <Box>
            <Grid className={classes.mainGrid} container spacing={3}>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  label="Shop name"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  value={shopType}
                  onChange={(e) => setShopType(e.target.value)}
                  variant="outlined"
                  label="Shop type"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Shop email"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  label="Shop number"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  label="Shop location"
                />
              </Grid>

              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  label="state"
                />
              </Grid>

              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="password"
                />
              </Grid>

              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  type="text"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  label="description"
                />
              </Grid>

              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <input
                  type="file"
                  onChange={handileFileInput}
                  name="image"
                  id=""
                />
                <div className={classes.imageDiv}>
                  {previewSource && (
                    <img
                      className={classes.ShopImage}
                      src={previewSource}
                      alt="..."
                    />
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.submitbox}>
            <Button type="submit" className="createUserBtn" variant="contained">
              submit
            </Button>
            {/* <img src="https://res.cloudinary.com/dvz2vfssk/image/upload/v1647318501/vehHope/enykzwnbgaov3ujhfez6.png" /> */}
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default CreateShop;
