import React, { useContext, useState } from "react";
import useInputs from "../../hooks/useInputs";
import UserContext from "@Context/UserContext";
import axios from "axios";
const SettingUpdate = ({ setUpdate }) => {
  const [Preview, setPreview] = useState(null); //User.image
  const [Image, setImage] = useState(null);
  const [onChange, Form] = useInputs();
  const [User, dispatch] = useContext(UserContext);

  function imageChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    setImage(e.target.files[0]);
  }
  function handleUpdate() {
    let formData = new FormData();
    formData.append("nickname", Form.nickname);
    formData.append("message", Form.message);
    formData.append("img", Image);
    axios
      .put("http://localhost:5000/user", formData, {
        header: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        dispatch({
          type: "SET_USER",
          value: {
            nickname: res.data.nickname,
            message: res.data.message,
            image: res.data.fileName,
          },
        });
      });
    setUpdate(false);
  }
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="relative flex-shrink-0">
            <a className="flex rounded-full w-16 h-16 ml-3">
              <img src={Preview} className="w-full h-full rounded-full" />
            </a>
          </div>
          <div className="flex flex-col ml-4 mt-2">
            <input
              className="w-2/3 mb-2"
              type="file"
              onChange={imageChange}
              accept="image/*"
            />
            <input
              type="text"
              name="nickname"
              className="font-bold border"
              value={Form.nickname}
              onChange={onChange}
              placeholder={User.nickname}
            />
            <input
              type="text"
              name="message"
              className="text-sm text-gray-600 border mt-2"
              value={Form.message}
              onChange={onChange}
              placeholder={User.message}
            />
          </div>
        </div>
        <div>
          <button
            className="bg-pink-500 w-20 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-6"
            type="button"
            onClick={handleUpdate}
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingUpdate;
