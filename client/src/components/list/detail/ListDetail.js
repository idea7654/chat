import React, { useContext, useState } from "react";
import UserContext from "@Context/UserContext";
import FriendInfo from "./FriendInfo";
const ListDetail = ({ data }) => {
  const [User] = useContext(UserContext);
  const [FriendModal, setFriendModal] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setFriendModal(true);
  }
  return (
    <li
      className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded"
      onClick={handleClick}
    >
      <div className="ml-1">
        <div className="relative flex-shrink-0">
          <a className="flex rounded-full w-12 h-12 mr-3">
            <img src={User.image} className="w-full h-full rounded-full" />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <h3 className="font-bold align-middle">{data.nickName}</h3>
        <div className="text-sm text-gray-600 align-middle mr-3">
          {User.message}
        </div>
      </div>
      {FriendModal ? <FriendInfo setFriendModal={setFriendModal} /> : ""}
    </li>
  );
};

export default ListDetail;
