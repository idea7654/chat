import React, { useContext, useEffect, useState } from "react";
import UserContext from "@Context/UserContext";
import RoomContext from "@Context/RoomContext";
import axios from "axios";
import { withRouter } from "react-router-dom";

const ChatDetail = ({ data, history }) => {
  const [User] = useContext(UserContext);
  const [Users, dispatch] = useContext(RoomContext);
  const [RoomInfo, setRoomInfo] = useState("");
  useEffect(() => {
    function getAite() {
      const aite = data.users.filter((data) => data !== User.nickname);
      return aite;
    }
    function RequestAxios(aite) {
      axios
        .get(`http://localhost:5000/friend/?search=${encodeURIComponent(aite)}`)
        .then((res) => {
          dispatch({
            type: "SET_USERS",
            value: res.data.user,
            name: "aite",
          });
        });
      dispatch({
        type: "SET_USERS",
        value: User,
        name: "user",
      });
    }
    RequestAxios(getAite());
  }, []);

  useEffect(() => {
    function searchRoom() {
      const body = {
        users: Users,
      };
      axios.post("http://localhost:5000/room/search", body).then((res) => {
        if (res.data.room.length === 0) {
          //alert("에러입니다");
        } else {
          // history.push(`/chat/${res.data.room[0].id}`);
          setRoomInfo(res.data.room[0]);
        }
      });
    }
    if (Users) {
      searchRoom();
    }
  }, [Users]);

  function handleClick() {
    //여기서 룸 찾아서 id반환, 해당 주소로 넘김
    // function searchRoom() {
    //   const body = {
    //     users: Users,
    //   };
    //   axios.post("http://localhost:5000/room/search", body).then((res) => {
    //     if (res.data.room.length === 0) {
    //       alert("에러입니다");
    //     } else {
    //       history.push(`/chat/${res.data.room[0].id}`);
    //       setRoomInfo(res.data.room[0].id);
    //     }
    //   });
    // }

    // searchRoom();
    history.push(`/chat/${RoomInfo.id}`);
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
              {Users.aite.image ? (
                <img
                  src={Users.aite.image}
                  className="w-full h-full rounded-full"
                />
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
        <div className="w-full flex justify-between">
          {Users ? (
            <h3 className="font-bold align-middle">{Users.aite.nickname}</h3>
          ) : (
            ""
          )}
          {Users ? (
            <div className="text-sm text-gray-600 align-middle mr-3">
              {/* {Users.aite.message} */}
              {/* 이부분은 마지막메시지로 하고 */}
              {RoomInfo.message
                ? RoomInfo.message[RoomInfo.message.length - 1].message
                : ""}
            </div>
          ) : (
            ""
          )}
        </div>
      </li>
    </div>
  );
};

export default withRouter(ChatDetail);
