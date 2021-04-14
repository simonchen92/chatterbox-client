import React from "react";

// Styling
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import SendMessageStyling from "./InputStyling";

const Input = ({ message, setMessage, sendMessage }) => {
  // Initialize Material UI Styling
  const classes = SendMessageStyling();

  return (
    <form className={classes.form}>
      <input
        className={classes.sendMessage}
        type="text"
        placeholder="Enter Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <Button
        className={classes.button}
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        onClick={(event) => sendMessage(event)}
      >
        Send
      </Button>
    </form>
  );
};

export default Input;
