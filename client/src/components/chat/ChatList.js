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

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="flex flex-row items-center justify-between mt-2 mx-2">
        <span className="font-bold text-xl text-gray-900">채팅</span>
      </h2>
      <div className="flex flex-col relative mt-4">
        {/* <div
          className="absolute flex items-center justify-center h-10 w-10 left-0 top-0"
          onClick={handleSearch}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <input
            className="pl-10 rounded h-10 w-full focus:outline-none bg-gray-200 focus:bg-gray-300"
            type="text"
            value={Form.nickname}
            name="nickname"
            onChange={onChange}
          />
        </div> */}
      </div>
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
