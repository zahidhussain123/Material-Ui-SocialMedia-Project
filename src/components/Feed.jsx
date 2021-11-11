import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Post from "./Post";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post post="Coding Style" />
      <Post post="News Analytics" />
      <Post post="Music" />
      <Post post="Technology" />
      <Post post="Movie Reviews" />
      <Post post="Life Hacks" />
      <Post post="Technical Skills" />
    </Container>
  );
};

export default Feed;
