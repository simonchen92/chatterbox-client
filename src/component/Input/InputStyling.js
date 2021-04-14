import { makeStyles } from "@material-ui/core/styles";

const SendMessageStyling = makeStyles((theme) => ({
  form: {
    display: "grid",
    justifyContent: "center",
    gridColumn: "1/3",
    padding: "1rem 1rem",
  },
  sendMessage: {
    width: "50vw",
    fontSize: "1rem",
    padding: ".5rem",
    marginRight: "1px",
    outline: "none",
    // boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)",
  },
  button: {
    gridColumn: "2",
    backgroundColor: "#86b3d1",
    margin: "1px",
  },
}));

export default SendMessageStyling;
