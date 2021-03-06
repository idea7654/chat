import React, { useState, useEffect } from "react";
import FriendInfo from "./FriendInfo";
import useAxios from "../../../hooks/useAxios";

const ListDetail = ({ data }) => {
  const [FriendModal, setFriendModal] = useState(false);
  const [Friend, setFriend] = useState(null);
  const { getAxios, Response } = useAxios();
  function handleClick(e) {
    e.stopPropagation();
    setFriendModal(true);
  }
  useEffect(() => {
    if (data) {
      getAxios(
        `http://localhost:5000/friend/?search=${encodeURIComponent(
          data.nickname
        )}`
      );
    }
  }, [data]);

  useEffect(() => {
    if (Response !== "") {
      setFriend(Response.user);
    }
    return () => {
      Response;
    };
  }, [Response]);
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
        <h3 className="font-bold align-middle">{data.nickname}</h3>
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
