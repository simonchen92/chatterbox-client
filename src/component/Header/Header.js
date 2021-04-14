import React from "react";

// Styling
import { Button } from "@material-ui/core";
import ChatRoomHeader from "./HeaderStyling";

const Header = () => {
  // Initialize Material UI Styling
  const classes = ChatRoomHeader();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Chatter Box</h1>
      <Button
        className={classes.button}
        size="small"
        variant="contained"
        type="submit"
        onClick={(event) => (window.location.href = "/")}
      >
        Leave Room
      </Button>
    </div>
  );
};

export default Header;
