import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  media: {
    height: 250,
  },
}));
function Shops() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          title="shop"
        />
        <CardContent>
          <Typography variant="h1">kfldjlkdfjljdf</Typography>
          <Typography variant="body1">
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoij
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoij
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoij
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoij
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoijfjalkjldkfjlkafjlkjdl;ajflkaj;l
            fdkljklajfdlkjkjfkljkljlkjlkjlkjlkjlkjlkjlkjkljkljlkjlkjljljoijoiojoij
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Shops;
