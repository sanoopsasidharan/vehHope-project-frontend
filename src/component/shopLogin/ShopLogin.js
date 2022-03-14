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
import React, { useState } from "react";
import axios from "../../axios";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyle();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/shop/login", { email, password }, { withCredentials: true })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <button type="submit" className="submitbutton">
              {" "}
              Submit
            </button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"You have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ShopLogin;
