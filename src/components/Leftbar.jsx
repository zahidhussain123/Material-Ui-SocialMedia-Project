import { Container, Typography } from "@material-ui/core";
import {
  Apps,
  Camera,
  Collections,
  Home,
  List,
  Lock,
  Person,
  Phone,
  Photo,
  Settings,
  Videocam,
} from "@material-ui/icons";
// import LockIcon from '@mui/icons-material/Lock';
import React from "react";
import useStyles from "../Styles";
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <Camera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <Photo className={classes.icon} />
        <Typography className={classes.text}>Album</Typography>
      </div>
      <div className={classes.item}>
        <Videocam className={classes.icon} />
        <Typography className={classes.text}>Videocam</Typography>
      </div>
      <div className={classes.item}>
        <Apps className={classes.icon} />
        <Typography className={classes.text}>App</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Phone className={classes.icon} />
        <Typography className={classes.text}>Phone</Typography>
      </div>
      <div className={classes.item}>
        <Lock className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
