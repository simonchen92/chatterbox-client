import React from "react";

import ChatRoomMessages from "./MessageStyling";

const Message = ({ message: { user, text, time }, name }) => {
  // Initialize Material UI Styling
  const classes = ChatRoomMessages();

  let isCurrentUser = false;

  if (user === name) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <div className={classes.root}>
      <div className={classes.message}>
        <div className={classes.userTimeStamp}>
          <p className={classes.userText}>{name}</p>
          <p className={classes.time}>{time}</p>
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.message}>
        <div className={classes.userTimeStamp}>
          <p className={classes.userText}>{user}</p>
          <p className={classes.time}>{time}</p>
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
