import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontSize: "blod",
    fontSize: "1.5rem",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    textAlign: "center",
  },
  form: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "white",
    textTransform: "initial"
  },
  transparentBackground:{
    backgroundColor: "transparent"
  },
  error:  {
    color:"#f04040"
  },
  fullWidth: {
    width: '100%',
  },
});
export default useStyles;
