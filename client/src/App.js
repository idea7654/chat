import React, { useEffect, useContext } from "react";
import Footer from "./Page/Footer";
import Chat from "./Page/Chat";
import List from "./Page/List";
import Landing from "./Page/Landing";
import { Route, withRouter } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import axios from "axios";
import Setting from "./Page/Setting";
import UserContext from "./context/UserContext";
const App = ({ history }) => {
  const [User, dispatch] = useContext(UserContext);
  useEffect(() => {
    const sessionToken = window.sessionStorage.getItem("token");
    if (sessionToken) {
      axios.defaults.headers.common["Authorization"] = sessionToken;
      axios
        .get("http://localhost:5000/auth/check")
        .then((res) => {
          dispatch({
            type: "SET_USER",
            value: res.data.info,
          });
        })
        .catch((err) => {
          alert("로그인이 필요합니다!");
          history.push("/login");
        });
    }
    console.log("작동");
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-200 py-8">
        <div className="flex flex-col w-full max-w-sm shadow bg-white p-4">
          <Route path="/" render={() => <Landing />} exact />
          <Route path="/list" render={() => <List />} />
          <Route path="/chat" render={(match) => <Chat match={match} />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/setting" render={() => <Setting />} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
