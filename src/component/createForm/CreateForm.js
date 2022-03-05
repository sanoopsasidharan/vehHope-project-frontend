import {
  Avatar,
  Box,
  Button,
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
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    borderRadius: "24px",
    backgroundColor: "#ffffff",
    boxShadow: "21px 21px 42px #666666",
    lineHeight: "3",
    padding: "15px",
    marginTop: "4vh",
    [theme.breakpoints.up("sm")]: {
      marginTop: "10vh",
    },
  },
}));

function CreateForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyle();
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    alert("sending data");
    <Navigate to="/" />;
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Create user
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
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
              autoComplete="current-password"
            />

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitFrom}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CreateForm;
