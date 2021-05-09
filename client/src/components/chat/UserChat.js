import React from "react";

const UserChat = ({ data, focus }) => {
  console.log(data.message);
  return (
    <div>
      <div className="overflow-auto">
        {focus ? (
          <div
            //className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg"
            className="float-right bg-green-200 w-3/4 mx-4 my-2 p-2 rounded"
            ref={focus}
          >
            {data.message}
          </div>
        ) : (
          <div
            //className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg"
            className="float-right bg-green-200 w-3/4 mx-4 my-2 p-2 rounded"
          >
            {data.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserChat;
