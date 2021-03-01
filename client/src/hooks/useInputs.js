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

  return [onChange, Form];
};

export default useInputs;
