import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
const LandingComponent = ({ history }) => {
  function handleStart() {
    axios
      .get("http://localhost:5000/auth/check")
      .then((res) => {
        history.push("/list");
      })
      .catch((err) => {
        history.push("/login");
      });
  }
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center my-56 w-full">Welcome to Chat!</div>
      <button
        className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default withRouter(LandingComponent);
