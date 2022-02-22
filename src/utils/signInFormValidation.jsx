export const validatePhone = (value) => {
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (!/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/ig.test(value)){
        error = "Invalid phone number 😩"
    }
    else {
      error = "Nice number 😃";
    }
  return error
}
export const validateEmail = (value) => {
    let error;
    if (!value) {
        error = "Email address is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
      } else {
        error = "Awesome email 😁";
        }
        return error
}
export const validatePassword = (value) => {
    let error;
    if (!value) {
        error = "Password is required";
      } else if (value.length <= 6) {
        error = "Password length is weak, need more than 6😩";
      } else {
        error = "Password strength is ok 💪";
      }
  return error
}
export const validatePhone = (value) => {
    let error;
  /* validating phone */
    if (!value) {
      error = "Phone number is required";
    } else if (!/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/ig.test(value)){
        error = "Invalid phone number 😩"
    }
    else {
      error = "Nice number 😃";
    }
  return error
}
export const validatePasswordComfirmation = (value) => {
    let error;
    if (!value) {
        errors.password_comfirmation = "Invalid password verification";
      } else if (values.password_comfirmation !== values.password) {
        errors.password_comfirmation = "Passwords don't match 😟";
      } else {
        errors.password_comfirmation = "Passwords match 👏";
      }
  return error
}
  
  /* validating email using regex to pass email */
   
  
  /* validating passwords */
    
  
  /* validating password verification with initial */