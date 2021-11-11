import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.mode ? "flex" : "none"),
      width: "70%",
    },
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(3),
  },

  icons: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.mode ? "none" : "flex"),
    },
  },
  searchbutton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },

  container: {
    height: "100vh",
    color: "white",
    position: "sticky",
    top: "0",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.success.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #999",
    },
  },

  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },

  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },

  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
