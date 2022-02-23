import React from "react";
import { useContext, useEffect } from "react";
// Context
import { userContext } from "../utils/userContext";

// Redirect method
import { useNavigate } from "react-router-dom";

const Listing = () => {

  const { state: currentUserState } = useContext(userContext);
  const navigate = useNavigate();
  const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
  console.log(is_loggedIn);
  useEffect(() => {
    if (is_loggedIn) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUserState]);
  return (
    <div>
        This a listing page.

    </div>
  );
};

export default Listing;