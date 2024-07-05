import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./index.css";

const SignInFormSuccess = () => {
  return (
    <div className="sign-up-container">
      <div className="container-wrapper">
        <CheckCircleOutlineIcon
          className="circle-icon"
          color="action"
          style={{
          width: "100px",
          height: "100px",
          }}
        />
        <div className="sign-up-form-title">Logged in successfully!</div>
      </div>
    </div>
  );
}

export default SignInFormSuccess;
