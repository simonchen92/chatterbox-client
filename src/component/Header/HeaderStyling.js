import { makeStyles } from "@material-ui/core/styles";

const ChatRoomHeader = makeStyles(() => ({
  root: {
    display: "grid",
    gridColumn: "1/3",
    alignItems: "start",
  },
  header: {
    gridColumn: "1",
    margin: "1rem",
  },
  button: {
    gridColumn: "2",
    backgroundColor: "#ffb2b2",
    margin: "1rem",
    textTransform: "none",
    textAlign: "center",
    width: "30%",
    justifySelf: "end",
  },
}));

export default ChatRoomHeader;
