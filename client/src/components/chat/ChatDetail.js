import React, { useContext, useEffect, useState } from "react";
import UserContext from "@Context/UserContext";
import RoomContext from "@Context/RoomContext";
import axios from "axios";
import { withRouter } from "react-router-dom";

const ChatDetail = ({ data, history }) => {
  const [User] = useContext(UserContext);
  const [Users, dispatch] = useContext(RoomContext);
  const [AiteInfo, setAiteInfo] = useState("");
  useEffect(() => {
    function getAite() {
      const aite = data.users.filter((data) => data != User.nickname);
      return aite;
    }
    function RequestAxios(aite) {
      axios
        .get(`http://localhost:5000/friend/?search=${encodeURIComponent(aite)}`)
        .then((res) => {
          setAiteInfo(res.data.user);
        });
    }
    RequestAxios(getAite());
  }, []);

  function handleClick() {
    //ここでルームを探してIDを得る、そのURLでリダイレクト
    function searchRoom() {
      const body = {
        users: {
          user: User,
          aite: AiteInfo,
        },
      };
      console.log(body);
      axios.post("http://localhost:5000/room/search", body).then((res) => {
        if (res.data.room.length === 0) {
          alert("エラーです");
        } else {
          dispatch({
            type: "SET_USERS",
            value: AiteInfo,
            name: "aite",
          });
          dispatch({
            type: "SET_USERS",
            value: User,
            name: "user",
          });
          history.push(`/chat/${res.data.room[0].id}`);
        }
      });
    }

    searchRoom();
    //history.push(`/chat/${RoomInfo.id}`);
  }
  return (
    <div>
      <li
        className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded"
        onClick={handleClick}
      >
        <div className="ml-1">
          <div className="relative flex-shrink-0">
            <a className="flex rounded-full w-12 h-12 mr-3">
              {AiteInfo.image ? (
                <img
                  src={AiteInfo.image}
                  className="w-full h-full rounded-full"
                />
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
        <div className="w-full flex justify-between">
          {AiteInfo ? (
            <h3 className="font-bold align-middle">{AiteInfo.nickname}</h3>
          ) : (
            ""
          )}
          {data
            ? data.message.length == 0
              ? ""
              : data.message[data.message.length - 1].message
            : ""}
        </div>
      </li>
    </div>
  );
};

export default withRouter(ChatDetail);
