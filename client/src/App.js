import React, { useEffect } from "react";
import Footer from "./Page/Footer";
import Message from "./Page/Message";
import List from "./Page/List";
import Landing from "./Page/Landing";
import { Route, withRouter } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import axios from "axios";
const App = () => {
  useEffect(() => {
    const sessionToken = window.sessionStorage.getItem("token");
    if (sessionToken) {
      axios.defaults.headers.common["Authorization"] = sessionToken;
    }
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200 py-8">
        <div className="flex flex-col w-full max-w-sm shadow bg-white p-4">
          <Route path="/" render={() => <Landing />} exact />
          <Route path="/list" render={() => <List />} />
          <Route path="/message" render={() => <Message />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
