import React from "react";

const ListDetail = ({ data }) => {
  return (
    <li className="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded">
      <div className="flex flex-col ml-4">
        <h3 className="font-bold">{data.nickName}</h3>
      </div>
    </li>
  );
};

export default ListDetail;
