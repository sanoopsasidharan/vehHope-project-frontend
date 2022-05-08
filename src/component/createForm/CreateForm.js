import { Box, Container, makeStyles } from "@material-ui/core";
import axios from "../../axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapModal from "../modal/MapModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../../component/InputComponent/Textfield";
import { toast } from "react-toastify";

// style
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: "24px",
    backgroundColor: "#ffffff",
    boxShadow: "5px 10px 50px #4a4a4a54",
    lineHeight: "3",
    padding: "15px 30px 30px 30px",
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
    marginBottom: 20,
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

  const submitForm = () => {
    const lantitude = lantitudeState.toString();
    const longitude = longitudeState.toString();
    // e.preventDefault();
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

  const Validate = Yup.object({
    name: Yup.string()
      .min(4, "Must be 4 characters or more ")
      .max(15, "Must be 15 characters or less ")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    number: Yup.number().required("Number is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
    conFirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password is must match ")
      .required("ConFirmpassword required"),
    location: Yup.string()
      .min(2, "Must be 2 characters or more ")
      .max(15, "Must be 15 characters or less ")
      .required("Location is required"),
  });

  const handleNavigate = () => {
    navigate("/login");
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
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              location: "",
              password: "",
              conFirmPassword: "",
            }}
            validationSchema={Validate}
            onSubmit={(values) => {
              values.lantitude = lantitudeState.toString();
              values.longitude = longitudeState.toString();
              values.number = values.number.toString();
              if (values.longitude === "")
                toast.warning("please select your location");
              console.log(values);
              const {
                name,
                email,
                number,
                location,
                password,
                lantitude,
                longitude,
              } = values;
              console.log(
                name,
                email,
                number,
                location,
                password,
                lantitude,
                longitude
              );
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
                    setErrorMessage(" no server responts");
                  });
              } catch (error) {
                setErrorMessage(" somthing error");
              }
            }}
          >
            {(fromik) => (
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h1 className=" font-weight-bold .display-4">Register</h1>
                </div>
                <Form>
                  <Textfield label="Name" name="name" type="text" />
                  <Textfield label="Email" name="email" type="email" />
                  <Textfield label="number" name="number" type="number" />
                  <Textfield label="location" name="location" type="text" />
                  <Textfield label="Password" name="password" type="password" />
                  <Textfield
                    label="ConFirm password"
                    name="conFirmPassword"
                    type="password"
                  />
                  <div
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ marginTop: "10px" }}>
                      <MapModal
                        handleLandLongSetting={handleLandLongSetting}
                        lantitudeState={lantitudeState}
                        longitudeState={longitudeState}
                      />
                    </div>
                  </div>
                  <div
                    onClick={handleNavigate}
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "end",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: "0",
                      }}
                    >
                      I have already account
                    </p>
                  </div>

                  <button
                    style={{ width: "100%" }}
                    className="btn btn-dark"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: "0",
                      }}
                    >
                      {errorMessage}
                    </p>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
}

export default CreateForm;
