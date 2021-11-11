import {
    Avatar,
    Container,
    Divider,
    ImageList,
    ImageListItem,
    Link,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import { deepPurple } from "@material-ui/core/colors";
  import { AvatarGroup } from "@material-ui/lab";
  import React from "react";
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: 14,
      fontWeight: 500,
      color: "#555",
      marginTop: theme.spacing(2),
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  const Rightbar = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={6} style={{ marginBottom: "20px" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
  
        <Typography>Photo Album</Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography
          className={classes.title}
          style={{ paddingBottom: 12 }}
          gutterBottom
        >
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Coding
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Technology
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Divider flexItem style={{ marginTop: "20px" }} />
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          News
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
      </Container>
    );
  };
  
  export default Rightbar;
  