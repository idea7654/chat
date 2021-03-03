import React, { useState, useContext } from "react";
import ListDetail from "./detail/ListDetail";
import Modal from "./Modal";
import UserContext from "../../context/UserContext";
import useInputs from "../../hooks/useInputs";
import axios from "axios";
const ListComponent = () => {
  const [User, dispatch] = useContext(UserContext);
  const [showModal, setModal] = useState(false);
  function handleAdd() {
    setModal(true);
  }
  const [onChange, Form, reset] = useInputs();

  function handleSearch(e) {
    e.preventDefault();
    axios
      .get(
        `http://localhost:5000/friend/?search=${encodeURIComponent(
          Form.nickName
        )}`
      )
      .then((res) => {
        console.log(res);
      });
    reset();
  }
  return (
    <div>
      <h2 className="flex flex-row items-center justify-between mt-2 mx-2">
        <span className="font-bold text-xl text-gray-900">친구</span>
        <img
          className="w-6 h-6"
          src="../../../public/plus.png"
          onClick={handleAdd}
        />
      </h2>
      {/* <div className="flex flex-col relative mt-4">
        <div className="absolute flex items-center justify-center h-10 w-10 left-0 top-0">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={handleSearch}
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <input
            className="pl-10 rounded h-10 w-full focus:outline-none bg-gray-200 focus:bg-gray-300"
            type="text"
            value={Form.nickName}
            onChange={onChange}
            name="nickName"
          />
        </div>
      </div> */}
      <ul
        className="flex flex-col mt-4 space-y-2 overflow-y-auto"
        style={{ height: "400px" }}
      >
        {User.friends
          ? User.friends.map((data, index) => {
              return <ListDetail key={index} data={data} />;
            })
          : ""}
      </ul>
      {showModal ? <Modal setModal={setModal} dispatch={dispatch} /> : ""}
    </div>
  );
};

export default ListComponent;
