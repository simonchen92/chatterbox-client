import React from "react";
import moment from "moment";

import ChatRoomMessages from "./MessageStyling";

const Message = ({ message: { user, text }, name }) => {
  // Initialize Material UI Styling
  const classes = ChatRoomMessages();

  // Formate Time to 12 Hour AM / PM Format
  const currentTime = moment().format("h:mm A");

  console.log("currentTime is:", currentTime);

  let isCurrentUser = false;

  if (user === name) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <div className={classes.root}>
      <div className={classes.message}>
        <div className={classes.userTimeStamp}>
          <p className={classes.userText}>{name}</p>
          <p className={classes.time}>{currentTime}</p>
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.message}>
        <div className={classes.userTimeStamp}>
          <p className={classes.userText}>{user}</p>
          <p className={classes.time}>{currentTime}</p>
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
