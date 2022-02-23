import axios from "axios";
import API from "../utils/api";


// making a post request to create a user
export const signUpUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await axios({
    method: "post",
    // url: `${import.meta.env.VITE_APP_API_ENDPOINT}/users`,
    url: `${API}/users`,
    headers: { "Content-Type": "application/json" },
    data: {
      "user": {
        "username": `${user.name}`,
        "email": `${user.email}`,
        "password": `${user.password}`,
        "password_confirmation": `${user.password_confirmation}`
      },
    },
  })
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", JSON.stringify(res.headers.authorization));
      dispatch({
        type: "setLoggedInUser",
        payload: res.headers.authorization,
      });
      return res.data.message
    })
    .catch((error) => {
      return error.response;
    });
};

// Post a sign in request to sign in
export const signInUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await axios({
    method: "post",
    url: `${API}/users/sign_in`,
    headers: { "Content-Type": "application/json" },
    data: { "user": { "email": `${user.email}`, "password": `${user.password}` } },
  })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.headers.authorization));
      console.log(res.headers.authorization)
      dispatch({
        type: "setLoggedInUser",
        payload:res.headers.authorization
      });
    })
    .catch((error) => {
      return error.response;
    });
};