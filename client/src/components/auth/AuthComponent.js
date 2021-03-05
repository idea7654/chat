import React, { useContext } from "react";
import useInputs from "../../hooks/useInputs";
import axios from "axios";
import { withRouter } from "react-router-dom";
import UserContext from "@Context/UserContext";
const AuthComponent = ({ history, type }) => {
  const [User, dispatch] = useContext(UserContext);
  const [onChange, Form] = useInputs();
  function handleSubmit() {
    if (type === "login") {
      let body = {
        email: Form.email,
        password: Form.password,
      };
      axios
        .post("http://localhost:5000/auth/login", body)
        .then(onLoginSuccess)
        .then(history.push("/"))
        .catch((err) => {
          alert("없는 유저입니다");
          console.log(err);
        });
    } else {
      let body = {
        email: Form.email,
        password: Form.password,
        nickname: Form.nickname,
      };
      axios
        .post("http://localhost:5000/auth/register", body)
        .then((res) => {
          history.push("/login");
        })
        .catch((err) => {
          alert("오류입니다!!");
        });
    }
  }

  function onLoginSuccess(res) {
    const { token } = res.data;
    axios.defaults.headers.common["Authorization"] = token;
    window.sessionStorage.setItem("token", token);
    axios
      .get("http://localhost:5000/auth/check")
      .then((res) => {
        dispatch({
          type: "SET_USER",
          value: res.data.info,
        });
      })
      .catch((err) => {
        alert("에러입니다!");
      });
  }
  return (
    <div>
      <h2 className="flex flex-row items-center justify-between mt-2">
        <span className="font-bold text-xl text-gray-900">
          {type === "login" ? "로그인" : "회원가입"}
        </span>
      </h2>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="username">
          Email
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Email"
          value={Form.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-light mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          placeholder="Password"
          value={Form.password}
          onChange={onChange}
        />
      </div>
      {type === "login" ? (
        ""
      ) : (
        <div className="mb-4">
          <label className="block text-md font-light mb-2" htmlFor="nickname">
            Nickname
          </label>
          <input
            className="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nickname"
            placeholder="Password"
            value={Form.nickname}
            onChange={onChange}
          />
        </div>
      )}

      <div className="flex items-center justify-end mb-5">
        <button
          className="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          {type === "login" ? "LOGIN" : "Register"}
        </button>
      </div>
      {type === "login" ? (
        <p className="text-center text-md font-light">
          Don't have an account?{" "}
          <a className="font-light text-md text-indigo-600">Create</a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default withRouter(AuthComponent);
