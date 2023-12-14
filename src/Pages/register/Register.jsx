import React, { useState } from "react";
import "./register.css";
import InputField from "../../components/inputField/InputField";

import {
  AiOutlineMail,
  AiOutlineUser,
  AiTwotoneEyeInvisible,
  AiTwotoneEye,
  AiOutlineCloudUpload,
  AiOutlineDelete,
} from "react-icons/ai";

const Register = () => {
  const userNameIcon = <AiOutlineUser size={30} color="white" />;
  const MailIcon = <AiOutlineMail size={30} color="white" />;
  const paswordIcon = <AiTwotoneEye size={30} color="white" />;
  const passwordNotVisibleIcon = (
    <AiTwotoneEyeInvisible size={30} color="white" />
  );

  const [selectedImage, setSlelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSlelectedImage(file);
  };
  return (
    <div className="w-100 h-100 bg-dark d-flex justify-content-center ">
      <div className="reg-container">
        <h3 className="heading">Registration Page </h3>
        {/* file upload  */}

        <div className="file-container">
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className="sub-cont-file">
            {selectedImage && (
              <div className="img-cont">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="selecetd Image"
                  className="selected-img"
                />
                <div
                  className="delete-icon-cont"
                  onClick={() => setSlelectedImage(null)}
                >
                  <AiOutlineDelete size={25} />
                </div>
              </div>
            )}
            <label htmlFor="file-upload" className="label-con">
              <AiOutlineCloudUpload className="file-upload-icon" />
              <p>Upload Profile Photo</p>
            </label>
          </div>
        </div>

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
        <InputField
          type={"password"}
          placeholder={"Password"}
          icon={passwordNotVisibleIcon}
        />
        <InputField
          type={"password"}
          placeholder={"Conform Password"}
          icon={passwordNotVisibleIcon}
        />
        <p className="content">
          By register you agree our terms and conditions
        </p>
        <div className="btn-container">
          <button className="button-reg">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
