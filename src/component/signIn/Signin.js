import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";
import AuthContext from "../../store/AuthContextProvider";
import OtpModal from "../modal/OtpModal";
import "./Signin.css";
import Textfield from "../../component/InputComponent/Textfield";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

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

function Signin({ Head }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmessage, setErrmessage] = useState("");
  const { userlogged, setuserDetails, getUserLogged, userDetails } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const classes = useStyle();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("/login", { email, password })
      .then(async (result) => {
        console.log(result);
        console.log(result.data.user);
        const userObj = result.data.user;

        if (!result.data.user) setErrmessage("somthing error");

        setErrmessage("");
        setuserDetails(userObj);
        await getUserLogged();
        navigate("/");
      })
      .catch((err) => {
        setErrmessage("email and password not match");
        console.log(err.message);
      });
  };

  const handleNavigate = () => {
    navigate("/create");
  };

  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "password must be at least 4 characters ")
      .required("Password is required"),
  });

  return (
    <>
      {/* <Container
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
          <Typography className={classes.mainHead} component="h1" variant="h5">
            {Head}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="current-email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <OtpModal />

            <button type="submit" className="submitbutton">
              Submit
            </button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/create" variant="body2">
                  {"Create a account?"}
                </Link>
              </Grid>
            </Grid>
            <div className="signIn_ErrMesg">
              <p>{errmessage}</p>
            </div>
          </Box>
        </Box>
      </Container> */}

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
              setErrmessage("");
              try {
                const { email, password } = values;
                axios
                  .post("/login", { email, password })
                  .then(async (result) => {
                    console.log(result);
                    console.log(result.data.user);
                    const userObj = result.data.user;

                    if (!result.data.user) setErrmessage("somthing error");

                    setErrmessage("");
                    setuserDetails(userObj);
                    await getUserLogged();
                    navigate("/");
                  })
                  .catch((err) => {
                    setErrmessage("email and password not match");
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
                  <h1 className="m-0 font-weight-bold .display-4">LogIn</h1>
                </div>
                <Form>
                  <Textfield label="Email" name="email" type="email" />
                  <Textfield label="Password" name="password" type="password" />
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
                  <div
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <OtpModal />
                    <p
                      style={{
                        marginBottom: "0px",
                      }}
                      onClick={handleNavigate}
                    >
                      Create an account
                    </p>
                  </div>

                  <button
                    style={{ width: "100%" }}
                    className="btn btn-dark"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div className="signIn_ErrMesg">
                    <p>{errmessage}</p>
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

export default Signin;
