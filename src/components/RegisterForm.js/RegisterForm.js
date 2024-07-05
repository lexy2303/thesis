import React, { useState, useEffect } from "react";
import { useDispatch }                from 'react-redux';
import LockOutlinedIcon               from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon      from '@mui/icons-material/AccountCircleOutlined';
import Visibility                     from '@mui/icons-material/Visibility';
import VisibilityOff                  from '@mui/icons-material/VisibilityOff';
import PersonAddAltOutlinedIcon       from '@mui/icons-material/PersonAddAltOutlined';
import EmailOutlinedIcon              from '@mui/icons-material/EmailOutlined';
import { loginSuccess }               from '../../redux/actions';
import Validation                     from '../Validation/Validation';

import "./index.css";

const RegisterForm = ({ submitForm, handleSignUpForm, closeModal, registerValues, setRegisterValues, errors, setErrors, showPassword, setShowPassword, dataIsCorrect, setDataIsCorrect }) => {
  
  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleInput = (e) => {
    setRegisterValues({...registerValues, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e) => {
    const validationErrors = Validation(registerValues);
    setErrors(validationErrors);

    e.preventDefault();

    setErrors(Validation(registerValues));
    setDataIsCorrect(true);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(loginSuccess());
      submitForm();
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 & dataIsCorrect)
    submitForm();
  }, [errors])


  return (
    <div className="register-form-container">
      <div className="register-app-wrapper">
        <h1 className="register-form-title">Register</h1>
        <div className="icon">
          <PersonAddAltOutlinedIcon
            color="action"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>
        <form className="register-form-wrapper">
          <div className="input-container">
            <div className="input-box">
              <AccountCircleOutlinedIcon color="action" className="mui-icon" />
              <div className="name">
                <div className="label">Full Name</div>
                <div className="name-wrapper">
                  <input
                    className="input"
                    type="text"
                    placeholder="John Doe"
                    name="fullName"
                    onChange={handleInput}
                  />
                </div>
                {errors.fullName && <p style={{ color: "rgba(242, 242, 242, 0.62)" }} className="error">{errors.fullName}</p>}
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="input-box">
              <EmailOutlinedIcon color="action" className="mui-icon" />
              <div className="name">
                <div className="label">Email</div>
                <div className="name-wrapper">
                  <input
                    className="input"
                    type="text"
                    placeholder="johnDoe23@gmail.com"
                    name="email"
                    onChange={handleInput}
                  />
                </div>
                {errors.email && <p style={{ color: "rgba(242, 242, 242, 0.62)" }} className="error">{errors.email}</p>}
              </div>
            </div>
          </div>

          <div className="password">
            <div className="input-box">
              <LockOutlinedIcon color="action" />
              <div className="name">
                <div className="label">Password</div>
                <div className="name-wrapper">
              <input
                className="input"
                type={ showPassword ? 'text' : 'password' }
                placeholder="Blht@dhu"
                name="password"
                onChange={handleInput}
              />
              {
                showPassword ? <VisibilityOff color="action" onClick={handleShowPassword}/> : <Visibility color="action" onClick={handleShowPassword}/>
              }
                </div>
                {errors.password && <p style={{ color: "rgba(242, 242, 242, 0.62)" }} className="error">{errors.password}</p>}
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              className="login-button"
              value={registerValues}
              onClick={handleFormSubmit}
            >
              Sign up now
            </button>
          </div> 

          <div className="text-container">
            <div className="account">Have on account?</div>
            <button
              className="sign-up"
              onClick={() => handleSignUpForm('login')}
            >Sign in</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
