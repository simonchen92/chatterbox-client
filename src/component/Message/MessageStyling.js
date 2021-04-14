import { makeStyles } from "@material-ui/core/styles";

const ChatRoomMessages = makeStyles(() => ({
  root: {
    display: "grid",
    alignItems: "center",
    gridTemplateRows: "1/2",
    gridTemplateColumns: "2/3",
    padding: ".5rem",
  },
  message: {
    borderRadius: "5px",
    padding: ".5em",
    wordBreak: "break-all",
    backgroundColor: "#e8efe2",
  },
  text: {
    marginTop: "0",
    marginBottom: ".5em",
  },
  time: {
    color: "#b2b2b2",
  },
  userText: {
    fontWeight: "bold",
  },
  userTimeStamp: {
    display: "flex",
    "& p": {
      marginTop: ".5em",
      paddingRight: ".5em",
    },
  },
}));

export default ChatRoomMessages;
