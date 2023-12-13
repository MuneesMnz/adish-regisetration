import React, { useState } from "react";
import "./inputField.css";


const InputField = ({ type, placeholder, icon }) => {
  return (
    <div className="inpcontainer">
      <input type={type} placeholder={placeholder} />
      <span className="icon">{icon ? icon : null}</span>
    </div>
  );
};

export default InputField;
