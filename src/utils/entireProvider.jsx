import UserProvider from "./userContext";

const EntireProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default EntireProvider;