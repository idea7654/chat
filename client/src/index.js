import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoomProvider } from "@Context/RoomContext";
import "@babel/polyfill";
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <RoomProvider>
        <App />
      </RoomProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
