import React, { useContext } from "react";
import UserContext from "@Context/UserContext";
const FriendInfo = ({ setFriendModal }) => {
  const [User] = useContext(UserContext);
  function handleClick(e) {
    e.stopPropagation();
    setFriendModal(false);
  }
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-solid border-gray-300 rounded-t">
              {/* <h3 className="text-3xl font-semibold">친구추가</h3> */}
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleClick}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="w-screen">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <div className="relative flex-shrink-0">
                    <a className="flex rounded-full w-32 h-32 mb-6">
                      <img
                        src={User.image}
                        className="w-full h-full rounded-full"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex justify-center mb-3 font-bold">
                  <div>{User.nickname}</div>
                </div>
                <div className="flex justify-center text-sm text-gray-600 mb-10">
                  <div>{User.message}</div>
                </div>
                <div className="flex justify-between mx-16 mb-10">
                  <div className="w-12 h-12">
                    <img src="../../../../public/chat.png" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="../../../../public/noFriend.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default FriendInfo;
