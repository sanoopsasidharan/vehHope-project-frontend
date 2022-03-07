import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./CreateShop.css";

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
}));

function CreateShop() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <form>
        <Box>
          <Typography className={classes.mainHead}>Create shop</Typography>
          <Box>
            <Grid className={classes.mainGrid} container spacing={3}>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Shop name"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Shop type"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Shop email"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Shop number"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Other number"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Shop location"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="pic code"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="state"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  type="file"
                  label="image1"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  type="file"
                  label="image2"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField className={classes.inputfield} type="file" />
              </Grid>
            </Grid>
          </Box>
          <Typography className={classes.subHead}>Owner detais</Typography>
          <Box>
            <Grid className={classes.mainGrid} container spacing={3}>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Name"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Address"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Email"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Number"
                />
              </Grid>
              <Grid className={classes.itemGrid} item xs={6} md={4}>
                <TextField
                  className={classes.inputfield}
                  name=""
                  variant="outlined"
                  label="Password"
                />
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.submitbox}>
            <Button className="createUserBtn" variant="contained">
              submit
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default CreateShop;
