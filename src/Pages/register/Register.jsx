import React from "react";
import "./register.css";
import InputField from "../../components/inputField/InputField";

import {
  AiOutlineMail,
  AiOutlineUser,
  AiTwotoneEyeInvisible,
  AiTwotoneEye,
} from "react-icons/ai";

const Register = () => {
  const userNameIcon = <AiOutlineUser size={30} color="white" />;
  const MailIcon = <AiOutlineMail size={30} color="white" />;
  const paswordIcon = <AiTwotoneEye size={30} color="white" />;
  const passwordNotVisibleIcon = (
    <AiTwotoneEyeInvisible size={30} color="white" />
  );
  return (
    <div className="w-100 h-100 bg-dark d-flex justify-content-center ">
      <div className="reg-container">
        <h3 className="heading">Registration Page </h3>
        <InputField type={"text"} placeholder={"Full Name"} />
        <InputField type={"text"} placeholder={"Last Name"} />
        <InputField
          type={"text"}
          placeholder={"User Name"}
          icon={userNameIcon}
        />
        <InputField type={"text"} placeholder={"Email "} icon={MailIcon} />
        <InputField type={"number"} placeholder={"Mobile"} />
        <InputField type={"number"} placeholder={"Whats App"} />
        <InputField type={"password"} placeholder={"Password"} icon={paswordIcon} />
        <InputField
          type={"password"}
          placeholder={"Conform Password"}
          icon={paswordIcon}
        />
        <p className="content">By register you agree our terms and conditions</p>
        <div className="btn-container">
          <button className="button-reg">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
