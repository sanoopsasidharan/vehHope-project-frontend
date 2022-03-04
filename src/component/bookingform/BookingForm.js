import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    margin: 20,
    [theme.breakpoints.up("sm")]: {
      margin: 55,
    },
  },
  bookingHead: {
    display: "flex",
    justifyContent: "center",
    marginBottom:10
  },
  bookingHeaderLetter: {
    fontWeight: 500,
  },
}));

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [complaint, setComplaint] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(address);
    console.log(date);
    console.log(company);
    console.log(model);
    console.log(complaint);
    console.log(state);
    console.log(location);
    console.log(landmark);
  };
  const classes = useStyle();
  return (
    <>
      <Box
        className={classes.mainBox}
        // margin={10}
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 10 }}
      >
        <Box className={classes.bookingHead}>
          <Typography className={classes.bookingHeaderLetter} variant="h5">
            Booking form
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEMail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="number"
              name="number"
              type="number"
              autoComplete="number"
              autoFocus
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="Address"
              autoComplete="Address"
              autoFocus
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box paddingLeft={1}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="date"
                  name="date"
                  label=""
                  type="date"
                  autoComplete="date"
                  autoFocus
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="company"
              label="vehicle company "
              name="company"
              autoComplete="company"
              autoFocus
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="vehicle model"
              label="model"
              name="model"
              autoComplete="model"
              autoFocus
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <TextField
          margin="normal"
          required
          fullWidth
          id="complaint"
          label="complaint"
          name="complaint"
          autoComplete="complaint"
          autoFocus
          onChange={(e) => {
            setComplaint(e.target.value);
          }}
        />

        <Grid container>
          <Grid item xs={12} md={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="state"
              name="state"
              autoComplete="state"
              autoFocus
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="location"
              name="location"
              autoComplete="location"
              autoFocus
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="landmark"
              label="land mark"
              name="land"
              autoComplete="land"
              autoFocus
              onChange={(e) => {
                setLandmark(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 5, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default BookingForm;
