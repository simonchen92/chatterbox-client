import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePageStyling from "./HomeStyling";

import { Paper, FormControl, TextField, Button } from "@material-ui/core";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // Initialize Material UI Styling
  const classes = HomePageStyling();

  return (
    <div className="joinChatroomContainer">
      <Paper className={classes.root} elevation={3}>
        <h1 className="heading">Chatter Box</h1>
        <FormControl className={classes.input}>
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl className={classes.input}>
          <TextField
            variant="outlined"
            label="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </FormControl>
        <Button
          className={classes.button}
          size="small"
          variant="contained"
          type="submit"
          component={Link}
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        >
          Join Chatroom
        </Button>
      </Paper>
    </div>
  );
};

export default Join;
