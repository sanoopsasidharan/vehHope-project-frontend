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
import ServiceModal from "../component/modal/ServiceModal";
import MapModal from "../component/modal/MapModal";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../component/InputComponent/Textfield";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
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
  const [ShopService, setShopService] = useState();

  const [lantitudeState, setLantitudeState] = useState("");
  const [longitudeState, setLongitudeState] = useState("");

  const handleLandLongSetting = (land, long) => {
    setLantitudeState(land);
    setLongitudeState(long);
  };

  const addservice = (service) => {
    setShopService(service);
  };

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

  const addService = (event) => {
    event.preventDefault();
  };
  const handileSubmit = async (e) => {
    e.preventDefault();
    const lantitude = lantitudeState.toString();
    const longitude = longitudeState.toString();
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
      lantitude,
      longitude,
      ShopService,
    });
  };

  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
    shopName: Yup.string()
      .min(4, "shop  must be at least 4 characters ")
      .required("Password is required"),
    shopType: Yup.string()
      .min(4, "shopType  must be at least 4 characters ")
      .required("shopType is required"),
    number: Yup.number()
      .min(10, "number  must be at least 10 characters ")
      .required("number is required"),
    location: Yup.string()
      .min(4, "location  must be at least 4 characters ")
      .required("location is required"),
    state: Yup.string()
      .min(2, "state  must be at least 2 characters ")
      .required("state is required"),
    description: Yup.string()
      .min(4, "description  must be at least 4 characters ")
      .required("description is required"),
  });
  const handleNavigate = () => {
    navigate("/loginShop");
  };
  return (
    <>
      <ToastContainer />
      <Container className={classes.container}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            shopName: "",
            shopType: "",
            number: "",
            location: "",
            state: "",
            description: "",
            image: "",
            lantitude: "",
            longitude: "",
            ShopService: "",
          }}
          validationSchema={Validate}
          onSubmit={(values) => {
            try {
              values.image = previewSource;
              values.lantitude = lantitudeState.toString();
              values.longitude = longitudeState.toString();
              values.ShopService = ShopService;
              console.log(values);
              axios
                .post("/create_shop", values)
                .then((res) => {
                  console.log(res);
                  if (res.data.shop) {
                    toast.success("shop created");
                    setTimeout(navigate("/"), 300);
                  }
                })
                .catch((err) => {
                  toast.error("something error");
                  console.log(err);
                });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {(formik) => (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography className={classes.mainHead}>
                  Create shop
                </Typography>
              </div>
              <Form>
                <Grid className={classes.mainGrid} container spacing={3}>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield label="Shop name" name="shopName" type="text" />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield label="Shop type" name="shopType" type="text" />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield label="Shop email" name="email" type="email" />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield
                      label="Shop number"
                      name="number"
                      type="number"
                    />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield
                      label="Shop location"
                      name="location"
                      type="text"
                    />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield label="state" name="state" type="text" />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield
                      label="password"
                      name="password"
                      type="password"
                    />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <Textfield
                      label="description"
                      name="description"
                      type="text"
                    />
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <div>
                      <div class="fileUpload">
                        <input
                          onChange={handileFileInput}
                          name="image"
                          type="file"
                          class="upload"
                        />
                        <span>UPLOAD IMAGE</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          backgroundColor: "#00bcbe",
                          color: "white",
                          padding: "16px",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <ServiceModal addservice={addservice} />
                      </div>
                    </div>
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#00bcbe",
                          color: "white",
                          padding: "9px",
                          borderRadius: "10px",
                        }}
                      >
                        <MapModal
                          handleLandLongSetting={handleLandLongSetting}
                          lantitudeState={lantitudeState}
                          longitudeState={longitudeState}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}>
                    <div
                      onClick={handleNavigate}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#00bcbe",
                        color: "white",
                        padding: "16px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <span>I have an account</span>
                    </div>
                  </Grid>
                  <Grid className={classes.itemGrid} item xs={6} md={4}></Grid>
                </Grid>
                <div
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <p>{errorMessage}</p>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "20px",
                  }}
                  className="btn btn-dark"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </Container>

      {/* <Container className={classes.container}>
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
                <Grid className={classes.itemGrid} item xs={6} md={4}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#00bcbe",
                        color: "white",
                        padding: "16px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <ServiceModal addservice={addservice} />
                    </div>
                  </div>
                </Grid>
                <Grid className={classes.itemGrid} item xs={6} md={4}>
                  <div>
                    <div class="fileUpload">
                      <input
                        onChange={handileFileInput}
                        name="image"
                        type="file"
                        class="upload"
                      />
                      <span>UPLOAD IMAGE</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>

            <Box className={classes.submitbox}>
              <Button
                type="submit"
                className="createUserBtn"
                variant="contained"
              >
                submit
              </Button>
            </Box>
          </Box>
        </form>
        <div></div>
        <div>
          <ServiceModal addservice={addservice} />
          <MapModal
            handleLandLongSetting={handleLandLongSetting}
            lantitudeState={lantitudeState}
            longitudeState={longitudeState}
          />
        </div>
      </Container> */}
    </>
  );
}

export default CreateShop;
