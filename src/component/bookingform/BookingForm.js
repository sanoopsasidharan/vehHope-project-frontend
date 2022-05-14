import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "../../axios";
import { toast, ToastContainer } from "react-toastify";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingSuccessModal from "../modal/BookingSuccessModal";
import Textfield from "../../component/InputComponent/Textfield";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    margin: 20,
    [theme.breakpoints.up("sm")]: {
      margin: "15px 55px 55px 55px",
    },
  },
  bookingHead: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  bookingHeaderLetter: {
    fontWeight: 800,
    marginBottom: "20px",
  },
}));

function BookingForm({ ShopData }) {
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
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/service_Booking", {
        name,
        email,
        number,
        address,
        date,
        company,
        model,
        complaint,
        state,
        location,
        landmark,
        shopId: ShopData._id,
      })
      .then((result) => {
        setName("");
        setEMail("");
        setName("");
        setAddress("");
        setDate("");
        setCompany("");
        setModel("");
        setComplaint("");
        setState("");
        setLocation("");
        setLandmark("");
        setBookingSuccess(true);
        // toast.success("service booked");
        setBookingSuccess(true);
        // setTimeout(() => {
        //   navigate("/");
        // }, 2000);

        console.log(result);
      })
      .catch((err) => {
        toast.error("somthing error");
        console.log(err);
      });
  };

  const Validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    name: Yup.string()
      .min(4, "name must be at least 4 characters ")
      .required("name is required"),
    number: Yup.number()
      .min(10, "number must be at least 10 characters")
      .required("number is required"),
    address: Yup.string()
      .min(4, "address must be at least 4 characters ")
      .required("address is required"),
    date: Yup.date().required("date is required"),
    company: Yup.string()
      .min(2, "company name must be at least 2 characters ")
      .required("company name is required"),
    model: Yup.string()
      .min(2, "model name must be at least 2 characters ")
      .required("model name is required"),
    complaint: Yup.string()
      .min(2, "complaint must be at least 2 characters ")
      .required("complaint is required"),
    state: Yup.string()
      .min(2, "state must be at least 2 characters ")
      .required("state is required"),
    location: Yup.string()
      .min(2, "location must be at least 2 characters ")
      .required("location  is required"),
    landmark: Yup.string()
      .min(2, "landmark must be at least 2 characters ")
      .required("landmark  is required"),
  });

  const classes = useStyle();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          name: "",
          number: "",
          address: "",
          date: "",
          company: "",
          model: "",
          complaint: "",
          state: "",
          location: "",
          landmark: "",
          shopId: "",
        }}
        validationSchema={Validate}
        onSubmit={(values) => {
          try {
            values.shopId = ShopData._id;

            console.log(values);
            axios
              .post("/service_Booking", values)
              .then((result) => {
                setBookingSuccess(true);
                setBookingSuccess(true);
                console.log(result);
              })
              .catch((err) => {
                toast.error("somthing error");
                console.log(err);
              });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <>
            <Box
              className={classes.mainBox}
              // component="form"
              // noValidate
              // onSubmit={handleSubmit}
              // sx={{ margin:'' }}
            >
              <Box className={classes.bookingHead}>
                <Typography
                  className={classes.bookingHeaderLetter}
                  variant="h5"
                >
                  {bookingSuccess ? <BookingSuccessModal /> : null}
                  Booking form
                </Typography>
              </Box>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Textfield label="name" name="name" type="text" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="email" name="email" type="email" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="number" name="number" type="number" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="address" name="address" type="address" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="date" name="date" type="date" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield
                      label="company name"
                      name="company"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="model" name="model" type="text" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="complaint" name="complaint" type="text" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="state" name="state" type="text" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="location" name="location" type="text" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield label="land mark " name="landmark" type="text" />
                  </Grid>
                </Grid>

                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "20px",
                    margin: "40px 0px 10px 0px",
                  }}
                  className="btn btn-dark"
                  type="submit"
                >
                  SUBMIT
                </button>
              </Form>
            </Box>
          </>
        )}
      </Formik>

      <ToastContainer />
    </>
  );
}

export default BookingForm;
