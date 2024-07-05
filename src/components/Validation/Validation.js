const Validation = (values) => {
  let error = {};

  if (values.userName === '') {
    error.userName = "Username should not be empty"
  }
  if (values.password === '') {
    error.password = "Password should not be empty";
  } else {
    if (values.password.length < 6) {
      error.password = "Password should be at least 6 characters";
    }
    if (!/[a-z]/.test(values.password)) {
      error.password = "Password should contain at least one lowercase letter";
    }
    if (!/[A-Z]/.test(values.password)) {
      error.password = "Password should contain at least one uppercase letter";
    }
  }
  if (values.fullName === '') {
    error.fullName = "Full name should not be empty"
  }
  if (values.email === '') {
    error.email = "Email should not be empty";
  } else if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Email address is invalid";
  }
  return error;
}

export default Validation;
