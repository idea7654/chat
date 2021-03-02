import React from "react";

const UserChat = ({ data, focus }) => {
  return (
    <div>
      <div>
        {focus ? (
          <div
            className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg"
            ref={focus}
          >
            {data.message}
          </div>
        ) : (
          <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg">
            {data.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserChat;
