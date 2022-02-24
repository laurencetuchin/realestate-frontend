import { useContext, useEffect, useState } from 'react';


// Context
import {userContext} from'../utils/userContext'


// Redirect method
import { useNavigate } from 'react-router-dom'

// Login Components
import FormContainer from '../components/form/formContainer'
import Form from '../components/form/form'
import FormHeader from '../components/form/formHeader'
import FormSubheader from '../components/form/formSubheader'
import LogInForm from '../components/form/logInForm'
// import axios from 'axios';


function Login() {
// login form text
const  header = 'Welcome Back 🚀'
const  subheader = 'Enter your credentials to access your account'
const  linkSignUp = {
  status:'don\'t',
  register:'Register'
}
const { state: currentUserState } = useContext(userContext);
const navigate = useNavigate();
const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
    console.log(is_loggedIn)
  useEffect(() => {
    if (is_loggedIn) {
      navigate('/home')
    }
  },[currentUserState])

    // Set state for login
    // const [login, setLogin] = useState({
    //     username: 'tesee9t55',
    //     email: 'test3ii343e598@gmail.com',
    //     password: 'test'

    // })
    // axios.post('https://realestate-rails-api.herokuapp.com/users', {
    //     username: login.username,
    //     email: login.email,
    //     password: login.password
    // }, { Authorization: "Bearer" + localStorage.getItem("authToken")    }
    // )


    return (
     
     <FormContainer>
     <Form>
     <FormHeader text={header} />  
     <FormSubheader text={subheader} />
     
     <LogInForm linkSignUp={linkSignUp}/>
     </Form>
     </FormContainer>
 
    );
  }
  
  export default Login;