import { makeStyles } from "@material-ui/core/styles";

const ChatRoomStyling = makeStyles(() => ({
  paper: {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "auto 1fr",
    borderRadius: "0",
    margin: "5rem auto",
    height: "80vh",
    width: "70vw",
    backgroundColor: "#d1e0c5",
  },
}));

export default ChatRoomStyling;
