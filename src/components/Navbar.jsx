import {
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
  import useStyles from "../Styles";
  import { useState } from "react";
  
  const Navbar = () => {
    const [mode, setMode] = useState(false);
    const classes = useStyles({ mode });
    return (
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logoLg}>
            CODEMY
          </Typography>
          <Typography variant="h5" className={classes.logoSm}>
            Codemy
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input} />
            <Cancel className={classes.cancel} onClick={() => setMode(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchbutton}
              onClick={() => setMode(true)}
            />
            <Badge color="secondary" badgeContent={4} className={classes.badge}>
              <Mail />
            </Badge>
            <Badge color="secondary" badgeContent={2} className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="zaid.jpeg" />
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  