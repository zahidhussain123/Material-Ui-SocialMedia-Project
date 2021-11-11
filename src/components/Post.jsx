import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(3),
    },
  
    media: {
      height: "250px",
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  const Post = (props) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="My Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {props.post}
            </Typography>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here'. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here'.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;
  