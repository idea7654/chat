import React from "react";
import { withRouter } from "react-router-dom";
const FooterComponent = ({ history }) => {
  function redirectList(e) {
    e.preventDefault();
    const sessionToken = window.sessionStorage.getItem("token");
    if (sessionToken) {
      history.push("/list");
    } else {
      history.push("/login");
    }
  }

  function redirectMessage(e) {
    e.preventDefault();
    const sessionToken = window.sessionStorage.getItem("token");
    if (sessionToken) {
      history.push("/chat");
    } else {
      history.push("/login");
    }
  }

  function redirectSetting(e) {
    e.preventDefault();
    const sessionToken = window.sessionStorage.getItem("token");
    if (sessionToken) {
      history.push("/setting");
    } else {
      history.push("/login");
    }
  }
  return (
    <div>
      <div className="flex flex-row items-center justify-around mt-4 bg-gray-100 p-4">
        <div className="flex text-gray-600" onClick={redirectList}>
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
        <div className="flex text-gray-600" onClick={redirectMessage}>
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex text-gray-600" onClick={redirectSetting}>
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FooterComponent);
