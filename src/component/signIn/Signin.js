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
// import React, { useState } from "react";
import "./Signin.css";

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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const classes = useStyle();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}
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
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Button
              type="submit"
              borderRadius="20px"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              className="submitbutton"
            >
              Sign In
            </Button> */}

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
                <Link href="#" variant="body2">
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

export default Signin;
