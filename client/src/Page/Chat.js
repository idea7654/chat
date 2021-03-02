import React from "react";
import ChatList from "../components/chat/ChatList";
import ChatRoom from "../components/chat/ChatRoom";
import { Route, withRouter } from "react-router-dom";
const Chat = ({ match }) => {
  return (
    <div>
      <Route path={match.path} render={() => <ChatList />} exact />
      <Route
        path={`${match.path}/:id`}
        render={(match) => <ChatRoom match={match} />}
      />
    </div>
  );
};

export default withRouter(Chat);
