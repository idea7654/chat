import React, { useContext, useEffect, useState, useRef } from "react";
import RoomContext from "@Context/RoomContext";
import { withRouter } from "react-router-dom";
import FriendChat from "./FriendChat";
import UserChat from "./UserChat";
import useInputs from "../../hooks/useInputs";
import io from "socket.io-client";

const ChatRoom = ({ history, match }) => {
  const [Users] = useContext(RoomContext);
  const [onChange, Form, clear] = useInputs();
  const [MessageList, setMessageList] = useState([]);
  const socket = io.connect("http://localhost:5000");
  const focus = useRef(null);
  function handleReturn() {
    history.push("/chat");
  }
  function sendMessage(e) {
    e.preventDefault();
    socket.emit("send message", {
      name: Users.user.nickname,
      message: Form.message,
      id: match.params.id,
    });
    clear();
  }
  useEffect(() => {
    if (Users.aite === "") {
      history.push("/chat");
    } else {
      socket.emit("entryRoom", match.params.id);
    }
  }, []);

  useEffect(() => {
    socket.on("entryRoom", (data) => {
      setMessageList(data.message);
      focus.current.scrollIntoView({ behavior: "auto", block: "end" });
    });
  }, []);

  useEffect(() => {
    socket.on("send message", (data) => {
      setMessageList((MessageList) => MessageList.concat(data));
      focus.current.scrollIntoView({ behavior: "auto", block: "end" });
    });
  }, []);
  return (
    <div>
      <div style={{ overscrollBehavior: "none" }}>
        <div
          className="w-full bg-green-400 h-16 pt-2 text-white flex justify-between shadow-md"
          style={{ top: "0px", overscrollBehavior: "none" }}
        >
          {/* <!-- back button --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-12 h-12 my-1 text-green-100 ml-2"
            onClick={handleReturn}
          >
            <path
              className="text-green-100 fill-current"
              d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
            />
          </svg>
          <div className="my-3 pr-12 text-green-100 font-bold text-lg tracking-wide">
            {Users.aite.nickname}
          </div>
          <div></div>
        </div>
        <div
          style={{ height: "55vh" }}
          className="w-full h-full mb-16 overflow-auto"
          ref={focus}
        >
          {MessageList.map((data, index) => {
            if (index === MessageList.length - 1) {
              if (data.name === Users.user.nickname) {
                return <UserChat key={index} data={data} focus={focus} />;
              } else {
                return <FriendChat key={index} data={data} focus={focus} />;
              }
            }
            if (data.name === Users.user.nickname) {
              return <UserChat key={index} data={data} />;
            } else {
              return <FriendChat key={index} data={data} />;
            }
          })}
        </div>
      </div>

      <div className="w-full flex justify-between" style={{ bottom: "0px" }}>
        <textarea
          className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
          rows="1"
          placeholder="Message..."
          style={{ outline: "null" }}
          name="message"
          onChange={onChange}
          value={Form.message}
        ></textarea>
        <button
          className="m-2"
          style={{ outline: "none" }}
          onClick={sendMessage}
        >
          <svg
            className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default withRouter(ChatRoom);
