import React                  from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./index.css";

const RegisteredFormSuccess = () => {
  return (
    <div className="register-container-wrapper">
      <div className="container-wrapper">
        <CheckCircleOutlineIcon
          className="circle-icon"
          color="action"
          style={{
          width: "100px",
          height: "100px",
          }}
        />
        <div className="register-title">Registered successfully!</div>
      </div>
    </div>
  )
}

export default RegisteredFormSuccess;