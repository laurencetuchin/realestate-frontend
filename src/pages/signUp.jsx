import { useContext, useEffect } from "react";

// Context
import { userContext } from "../utils/userContext";

// Redirect method
import { useNavigate } from "react-router-dom";

// Login Components
import FormContainer from "../components/form/formContainer";
import Form from "../components/form/form";
import FormHeader from "../components/form/formHeader";
import FormSubheader from "../components/form/formSubheader";
import SignUpForm from "../components/form/signUpForm";

function SignUp() {
  // Sign up form text
  const header = "Welcome 👏";
  const subheader = "Enter credentials to create your account";
  const linkSignIn = {
    status: "already",
    LogIn: "Log In",
  };

  const { state: currentUserState } = useContext(userContext);
  const navigate = useNavigate();
  const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
  console.log(is_loggedIn);
  useEffect(() => {
    if (is_loggedIn) {
      navigate("/home");
    }
  }, [currentUserState]);
  return (
    <FormContainer>
      <Form>
        <FormHeader text={header} />
        <FormSubheader text={subheader} />

        <SignUpForm linkSignIn={linkSignIn} />
      </Form>
    </FormContainer>
  );
}

export default SignUp;