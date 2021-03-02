import React from "react";

const FriendChat = ({ data, focus }) => {
  return (
    <div>
      <div>
        {focus ? (
          <div
            className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
            ref={focus}
          >
            {data.message}
          </div>
        ) : (
          <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
            {data.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendChat;
