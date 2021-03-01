import React, { useContext, useEffect, useState } from "react";
import socketio from "socket.io-client";
import UserContext from "@Context/UserContext";
const socket = socketio.connect("http://localhost:5000");
const ChatDetail = ({ data }) => {
  const [User] = useContext(UserContext);
  const [Aite, setAite] = useState(null);
  //socket.emit("aisatsu", "안녕하세요");
  useEffect(() => {
    const aite = data.users.filter((data) => data !== User.nickname);
    setAite(aite[0]);
  }, []);
  return (
    <div>
      <li className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded">
        <div className="ml-1">
          <div className="relative flex-shrink-0">
            <a className="flex rounded-full w-12 h-12 mr-3">
              <img src={User.image} className="w-full h-full rounded-full" />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-between">
          {Aite ? <h3 className="font-bold align-middle">{Aite}</h3> : ""}
          <div className="text-sm text-gray-600 align-middle mr-3">
            {User.message}
            {/* 이부분은 마지막메시지로 하고 */}
          </div>
        </div>
        {/* {FriendModal ? (
        <FriendInfo setFriendModal={setFriendModal} data={data} />
      ) : (
        ""
      )} */}
      </li>
    </div>
  );
};

export default ChatDetail;
