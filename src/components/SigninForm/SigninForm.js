import React, { useState, useEffect } from "react";
import { useDispatch }                from 'react-redux';
import Visibility                     from '@mui/icons-material/Visibility';
import VisibilityOff                  from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon               from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon      from '@mui/icons-material/AccountCircleOutlined';
import Validation                     from '../Validation/Validation';
import Lottie                         from 'lottie-react';
import animationData14                from '../../assets/animations/Animation 9.json';
import { loginSuccess }               from '../../redux/actions';

import './index.css';

const SignInForm = ({ submitForm, handleSignUpForm, closeModal, values, setValues, errors, setErrors, showPassword, setShowPassword, dataIsCorrect, setDataIsCorrect }) => {

  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleInput = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e) => {
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    e.preventDefault();

    setErrors(Validation(values));
    setDataIsCorrect(true);
    
    if (Object.keys(validationErrors).length === 0) {
      dispatch(loginSuccess());
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', values.userName);
      submitForm();
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 & dataIsCorrect)
    submitForm();
  }, [errors])

  return (
    <div className="sign-in-container">
      <div className="image-background">
        <Lottie animationData={animationData14} loop={true} className="form-animation"/>
      </div>
      <div className="form-wrapper">
      <h1 className="form-title">Login</h1>
        <form className="user-form-wrapper">
          <div className="input-container">
              <div className="input-box">
                <AccountCircleOutlinedIcon color="action" className="mui-icon" />
                <div className="name">
                  <div className="label">Username</div>
                  <div className="name-wrapper">
                    <input
                      className="input"
                      type="text"
                      placeholder="JohnDoe23"
                      name="userName"
                      onChange={handleInput}
                    />
                  </div>
                  {errors.userName && <p style={{ color: "rgba(242, 242, 242, 0.62)" }} className="error">{errors.userName}</p>}
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
              value={values}
              onClick={handleFormSubmit}
            >
              Login
            </button>
          </div> 

          <div className="text-container">
            <div className="account">Don't have on account?</div>
            <button
              className="sign-up"
              onClick={() => handleSignUpForm('registered')}
            >Sign up</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default SignInForm;
