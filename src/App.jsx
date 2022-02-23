import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Components
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import NavBar from "./components/navBar";
//UserProvider
import UserProvider from "./utils/userContext";
// PropertyProvider
import PropertyProvider from "./utils/propertyContext";

// Loading
import Loading from "./pages/loading";
//Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Context
import { userContext } from "./utils/userContext";
//Page
import Home from "./pages/home";
import Listing from "./pages/listing";
import Sell from "./pages/sell";
import NotFound from "./pages/notFound";
// Redirect method
import { useNavigate } from "react-router-dom";

function App() {
  // destructure the returning result of useContext to user state and the setter.
  const { state: currentUserState } = useContext(userContext);
  // try to identify if the user is logged in and have user data in local storage.
  const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
  const navigate = useNavigate();
  // once the user state is changed then it will be rerendered
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <p>Text</p>
      <Routes>
        <Route exact path="/" element={<Login is_loggedIn={is_loggedIn} />} />
        <Route exact path="/sign_In" element={<Login />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/listing" element={<Listing />} />
        <Route exact path="/sell" element={<Sell />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;