import React, { useState } from "react";

const useInputs = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
    nickName: "",
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((Form) => ({ ...Form, [name]: value }));
  }

  function clear() {
    setForm({
      email: "",
      password: "",
      nickName: "",
      message: "",
    });
  }

  return [onChange, Form, clear];
};

export default useInputs;
