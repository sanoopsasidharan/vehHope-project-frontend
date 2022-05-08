import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import ShopContext from "../../store/ShopContextProvider";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Textfield from "../../component/InputComponent/Textfield";

// import "./Signin.css";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: "24px",
    backgroundColor: "#ffffff",
    boxShadow: "5px 10px 50px #4a4a4a54",
    lineHeight: "4",
    padding: "15px",
    marginTop: "22%",
    [theme.breakpoints.up("sm")]: {
      marginTop: "20vh",
    },
  },
  mainHead: {
    fontSize: 30,
    fontWeight: 500,
  },
}));

function ShopLogin({ Head }) {
  const { setShopData, getShopLogged } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const classes = useStyle();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/shop/login", { email, password })
  //     .then(async (result) => {
  //       console.log(result);
  //       if (result.data.shop) {
  //         setErrorMessage("");
  //         setShopData(result.data.shop);
  //         await getShopLogged();
  //         navigate("/shop");
  //       } else {
  //         setErrorMessage("email and password is not match");
  //       }
  //     })
  //     .catch((err) => {
  //       setErrorMessage("email and password is not match");
  //       console.log(err.message);
  //     });
  // };

  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
  });

  const handleNavigate = () => {
    navigate("/createShop");
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
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Validate}
            onSubmit={(values) => {
              try {
                setErrorMessage("");
                const { email, password } = values;
                axios
                  .post("/shop/login", { email, password })
                  .then(async (result) => {
                    console.log(result);
                    if (result.data.shop) {
                      setErrorMessage("");
                      setShopData(result.data.shop);
                      await getShopLogged();
                      navigate("/shop");
                    } else {
                      setErrorMessage("email and password is not match");
                    }
                  })
                  .catch((err) => {
                    setErrorMessage("email and password is not match");
                    console.log(err.message);
                  });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {(formik) => (
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    className={classes.mainHead}
                    component="h1"
                    variant="h5"
                  >
                    {Head}
                  </Typography>
                </div>
                <Form>
                  <Textfield label="Email" name="email" type="email" />
                  <Textfield label="Password" name="password" type="password" />
                  <div
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      {errorMessage}
                    </p>
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
                        margin: "0px",
                      }}
                    >
                      Create a shop account
                    </p>
                  </div>
                  <button
                    style={{ width: "100%" }}
                    className="btn btn-dark"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div className="signIn_ErrMesg"></div>
                </Form>
              </div>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
}

export default ShopLogin;
