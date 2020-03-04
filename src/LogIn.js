import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import JoblyApi from './JoblyApi';

function Login() {
  const [loginForm, setLoginForm] = useState(true);

  async function login({ username, password}){
    let data = {username, password};
    const response = await JoblyApi.login(data);
  }

  return (
    <div>
      <button onClick={() => setLoginForm(true)}>Login</button>
      <button onClick={() => setLoginForm(false)}>Register</button>
      {loginForm ? <LoginForm login={login}/> : <RegisterForm />}
    </div>
  );
};

export default Login;

Login.defaultProps = {
  loggedIn: false
}