import React, { useState } from "react";
import axios from "axios";
import useInputs from "../../hooks/useInputs";
const Modal = ({ setModal, dispatch }) => {
  const [onChange, Form] = useInputs();
  const [Result, setResult] = useState(null);
  function handleSearch() {
    let body = {
      email: Form.email,
    };
    axios
      .post("http://localhost:5000/friend/search", body)
      .then((res) => {
        setResult(res.data.user);
      })
      .catch((err) => {
        alert("없는 유저입니다!");
      });
  }

  function addFriend() {
    let body = {
      nickname: Result.nickname,
    };
    axios.post("http://localhost:5000/friend", body).then((res) => {
      dispatch({
        type: "ADD_FRIEND",
        value: res.data.user.friends[res.data.user.friends.length - 1].nickname,
      });
      setModal(false);
    });
  }
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">친구추가</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto w-screen">
              <input
                className="w-full"
                type="text"
                placeholder="친구 이메일을 입력하세요"
                name="email"
                value={Form.email}
                onChange={onChange}
              />
            </div>
            <div className="flex justify-end border-b border-solid border-gray-300 rounded-t">
              <button
                className="bg-pink-500 w-20 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-6 mb-6"
                type="button"
                onClick={handleSearch}
              >
                찾기
              </button>
            </div>
            <ul>
              {Result ? (
                <li className="ml-6 my-6 flex justify-between">
                  {Result.email}{" "}
                  <button
                    className="bg-pink-500 w-20 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-6 mb-6"
                    type="button"
                    onClick={addFriend}
                  >
                    추가
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
