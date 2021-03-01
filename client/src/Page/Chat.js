import React from "react";
import ChatDetail from "../components/chat/ChatDetail";

const Chat = () => {
  return (
    <div>
      <ChatDetail />
      {/* <h2 className="flex flex-row items-center justify-between mt-2">
        <span className="font-bold text-xl text-gray-900">Messages</span>
        <a href="#" className="text-gray-600 hover:text-gray-700">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </h2>
      <div className="flex flex-col relative mt-4">
        <div className="absolute flex items-center justify-center h-10 w-10 left-0 top-0">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <input
            className="pl-10 rounded h-10 w-full focus:outline-none bg-gray-200 focus:bg-gray-300"
            type="text"
          />
        </div>
      </div>
      <ul
        className="flex flex-col mt-4 space-y-2 overflow-y-auto"
        style={{ height: "400px" }}
      >
        <li className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded">
          <div className="absolute flex items-center justify-center h-full right-0 top-0 mr-2">
            <span className="flex items-center justify-center shadow bg-blue-600 h-6 w-6 text-xs rounded-full text-white">
              2
            </span>
          </div>
          <div className="relative flex-shrink-0">
            <span className="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
            <a href="#" className="flex rounded-full w-16 h-16">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5"
                className="w-full h-full rounded-full"
              />
            </a>
          </div>
          <div className="flex flex-col ml-4">
            <h3 className="font-bold">John Doe</h3>
            <p className="text-sm text-gray-600">Hey, how are you today?</p>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default Chat;
