import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import JoblyApi from './JoblyApi';
import { Redirect, useHistory} from 'react-router-dom';

function Login({toggleState}) {
  const [loginForm, setLoginForm] = useState(true);
  const history = useHistory();

  // Might put login/register in one function
  async function login(data){
    
    const resp = await JoblyApi.login(data);
  
    if (resp.token){
      toggleState();
      history.push("/");
    };
  };

  async function register(data){
    const resp = await JoblyApi.register(data);
    if (resp.token){
      toggleState();
      history.push("/");
    };
  };

  return (
    <div>
      <button onClick={() => setLoginForm(true)}>Login</button>
      <button onClick={() => setLoginForm(false)}>Register</button>
      {loginForm ? <LoginForm login={login}/> : <RegisterForm register={register} />}
    </div>
  );
};

export default Login;

Login.defaultProps = {
  loggedIn: false
}