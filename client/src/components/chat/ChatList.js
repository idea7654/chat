import React, { useContext, useEffect, useState } from "react";
import UserContext from "@Context/UserContext";
import ChatDetail from "./ChatDetail";
import useAxios from "../../hooks/useAxios";
import useInputs from "../../hooks/useInputs";
const ChatList = () => {
  const [Room, setRoom] = useState(null);
  const [User] = useContext(UserContext);
  const { getAxios, Response } = useAxios();
  const [onChange, Form, reset] = useInputs();
  useEffect(() => {
    if (User.nickname) {
      getAxios("http://localhost:5000/room");
    }
  }, [User]);

  useEffect(() => {
    if (Response !== "") {
      setRoom(Response.room);
    }
    return () => {
      Response;
    };
  }, [Response]);

  return (
    <div>
      <h2 className="flex flex-row items-center justify-between mt-2 mx-2">
        <span className="font-bold text-xl text-gray-900">チャット</span>
      </h2>
      <div className="flex flex-col relative mt-4"></div>
      <ul
        className="flex flex-col mt-4 space-y-2 overflow-y-auto"
        style={{ height: "400px" }}
      >
        {Room
          ? Room.map((data, index) => {
              return <ChatDetail key={index} data={data} />;
            })
          : ""}
      </ul>
    </div>
  );
};

export default ChatList;
