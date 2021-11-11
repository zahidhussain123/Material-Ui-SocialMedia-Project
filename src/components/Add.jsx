import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    makeStyles,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
  } from "@material-ui/core";
  
  import { Add as Addicon } from "@material-ui/icons";
  import MuiAlert from "@material-ui/lab/Alert";
  import { useState } from "react";
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: 15,
      right: 15,
    },
  
    container: {
      width: 500,
      height: 550,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
  }));
  
  const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modeAlert, setModeAlert] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setModeAlert(false);
    };
    return (
      <div>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
          <Fab color="secondary" className={classes.fab}>
            <Addicon />
          </Fab>
        </Tooltip>
        <Modal open={open}>
          <Container className={classes.container}>
            <form className={classes.form}>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Give Suggestions"
                  label="Description"
                  variant="outlined"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField select label="Visibility" value="Public">
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Unlisted">Unlisted</MenuItem>
                </TextField>
              </div>
              <div>
                <FormLabel component="legend">Who can comment?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio size="small" />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Custom"
                    disabled
                    control={<Radio size="small" />}
                    label="Custom (Premium)"
                  />
                </RadioGroup>
              </div>
              <div className={classes.item}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => setModeAlert(true)}
                >
                  Create
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </Modal>
        <Snackbar
          open={modeAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    );
  };
  
  export default Add;
  