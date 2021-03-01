import React, { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

const UserContext = createContext();

function UserProvider({ children }) {
  const [User, dispatch] = useReducer(UserReducer, {});

  return (
    <UserContext.Provider value={[User, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };

export default UserContext;
