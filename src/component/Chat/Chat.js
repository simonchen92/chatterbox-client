import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Header from "../Header/Header";
import ChatRoomInfo from "../ChatRoomInfo/ChatRoomInfo";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const classes = useStyles();

  return (
    <div className="chatContainer">
      <Paper className={classes.paper} elevation={3}>
        <Header />
        <ChatRoomInfo room={room} users={users} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Paper>
    </div>
  );
};

export default Chat;
