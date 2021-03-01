import React from "react";
import socketio from "socket.io-client";

const socket = socketio.connect("http://localhost:5000");
const ChatDetail = () => {
  socket.emit("aisatsu", "안녕하세요");
  return <div></div>;
};

export default ChatDetail;
