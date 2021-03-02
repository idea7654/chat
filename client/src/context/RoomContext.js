import React, { createContext, useReducer } from "react";
import RoomReducer from "../reducer/RoomReducer";

const RoomContext = createContext();

function RoomProvider({ children }) {
  const [Users, dispatch] = useReducer(RoomReducer, {
    user: "",
    aite: "",
  });

  return (
    <RoomContext.Provider value={[Users, dispatch]}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomProvider };

export default RoomContext;
