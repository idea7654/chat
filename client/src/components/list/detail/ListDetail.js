import React, { useState, useEffect, useContext } from "react";
import FriendInfo from "./FriendInfo";
import axios from "axios";
const ListDetail = ({ data }) => {
  const [FriendModal, setFriendModal] = useState(false);
  const [Friend, setFriend] = useState(null);
  function handleClick(e) {
    e.stopPropagation();
    setFriendModal(true);
  }
  useEffect(() => {
    console.log(data);
    if (data) {
      axios
        .get(
          `http://localhost:5000/friend/?search=${encodeURIComponent(
            data.nickName
          )}`
        )
        .then((res) => {
          setFriend(res.data.user);
        });
    }
  }, [data]);
  return (
    <li
      className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded"
      onClick={handleClick}
    >
      <div className="ml-1">
        <div className="relative flex-shrink-0">
          <a className="flex rounded-full w-12 h-12 mr-3">
            {Friend ? (
              <img src={Friend.image} className="w-full h-full rounded-full" />
            ) : (
              ""
            )}
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <h3 className="font-bold align-middle">{data.nickName}</h3>
        <div className="text-sm text-gray-600 align-middle mr-3">
          {Friend ? Friend.message : ""}
        </div>
      </div>
      {FriendModal ? (
        <FriendInfo setFriendModal={setFriendModal} Friend={Friend} />
      ) : (
        ""
      )}
    </li>
  );
};

export default ListDetail;
