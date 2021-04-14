import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    fontSize: "1rem",
    padding: "1rem",
    width: "14vw",
    overflowY: "scroll",
    overflowWrap: "break-word",
    background: "rgba(255, 255, 255, 0.5)",
  },
  roomName: {
    display: "flex",
  },
  onlineUsers: {
    display: "flex",
  },
  icon: {
    paddingRight: "2px",
  },
  user: {
    margin: "5px 0",
  },
  image: {
    padding: "2px",
  },
}));

export default useStyles;
