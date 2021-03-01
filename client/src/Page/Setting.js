import React, { useState } from "react";
import SettingComponent from "../components/setting/SettingComponent";
import SettingUpdate from "../components/setting/SettingUpdate";
const Setting = () => {
  const [Update, setUpdate] = useState(false);
  return (
    <div>
      {Update ? (
        <SettingUpdate setUpdate={setUpdate} />
      ) : (
        <SettingComponent setUpdate={setUpdate} />
      )}
    </div>
  );
};

export default Setting;
