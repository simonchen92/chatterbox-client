import React, { useEffect, useRef } from "react";

import Message from "../Message/Message";
import MessagesScrolling from "./MessagesStyling";

const Messages = ({ messages, name }) => {
  // Initialize Material UI Styling
  const classes = MessagesScrolling();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);

  return (
    <div className={classes.root}>
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
