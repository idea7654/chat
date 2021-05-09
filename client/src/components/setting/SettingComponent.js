import React, { useContext } from "react";
import UserContext from "@Context/UserContext";
import axios from "axios";
import { withRouter } from "react-router-dom";
const SettingComponent = ({ setUpdate, history }) => {
  const [User] = useContext(UserContext);
  function handleLogout() {
    axios.defaults.headers.common["Authorization"] = "";
    window.sessionStorage.setItem("token", "");
    history.push("/");
  }
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="relative flex-shrink-0">
            <a className="flex rounded-full w-16 h-16 ml-3">
              <img src={User.image} className="w-full h-full rounded-full" />
            </a>
          </div>
          <div className="flex flex-col ml-4 mt-2">
            <h3 className="font-bold">{User.nickname}</h3>
            <p className="text-sm text-gray-600">{User.message}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-pink-500 w-20 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-6"
            type="button"
            onClick={() => setUpdate(true)}
          >
            編集
          </button>
        </div>
      </div>
      <button
        className="bg-pink-500 w-full text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 mt-6 rounded shadow hover:shadow-md outline-none focus:outline-none mr-6"
        type="button"
        onClick={handleLogout}
      >
        ログアウト
      </button>
    </div>
  );
};

export default withRouter(SettingComponent);
