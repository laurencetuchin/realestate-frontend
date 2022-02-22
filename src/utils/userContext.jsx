import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import { signUpUser, signInUser} from "../services/authServices";

const userState = {
  token: null
};

export const userContext= createContext({
  state: userState,
  dispatch: () => {},
  signIn: () => {},
  signUp: () => {},
});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, userState);
  const signIn = (data) => signInUser(data, dispatch);
  const signUp = (data) => signUpUser(data, dispatch);
  return (
    <userContext.Provider value={{ state, dispatch,signIn,signUp}}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;