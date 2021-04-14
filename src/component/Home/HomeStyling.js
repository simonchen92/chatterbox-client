import { makeStyles } from "@material-ui/core/styles";

const HomePageStyling = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem auto",
    padding: theme.spacing(5),
    height: "50vh",
    width: "50vh",
    backgroundColor: "#ededed",
  },
  input: {
    margin: "1rem !important",
  },
  button: {
    margin: "1rem !important",
    textTransform: "none !important",
    backgroundColor: "#81d8d0 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "#d89581 !important",
    },
  },
}));

export default HomePageStyling;
