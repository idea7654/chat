import axios from "axios";
import { useState } from "react";

function useAxios() {
  const [Response, setResponse] = useState("");
  const [Error, setError] = useState("");
  function getAxios(url) {
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }

  function postAxios(url, body) {
    axios
      .post(url, body)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return { getAxios, postAxios, Response, Error };
}

export default useAxios;
