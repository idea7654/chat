import React from "react";
import Footer from "./Page/Footer";
import Message from "./Page/Message";
import Landing from "./Page/Landing";
import Login from "./components/auth/Login";
import { Route, withRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200 py-8">
        <div className="flex flex-col w-full max-w-sm shadow bg-white p-4">
          <Route path="/" render={() => <Landing />} exact />
          <Route path="/message" render={() => <Message />} />
          <Route path="/login" render={() => <Login />} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
