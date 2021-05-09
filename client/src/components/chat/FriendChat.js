import React from "react";

const FriendChat = ({ data, focus }) => {
  console.log(data);
  return (
    <div>
      <div className="overflow-auto">
        {focus ? (
          <div
            className="float-left bg-blue-200 w-3/4 mx-4 my-2 p-2 rounded"
            ref={focus}
          >
            {data.message}
          </div>
        ) : (
          <div className="float-left bg-blue-200 w-3/4 mx-4 my-2 p-2 rounded">
            {data.message}
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendChat;
