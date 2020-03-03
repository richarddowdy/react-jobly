import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Login() {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <div>
      <button onClick={() => setLoginForm(true)}>Login</button>
      <button onClick={() => setLoginForm(false)}>Register</button>
      {loginForm ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Login;

Login.defaultProps = {
  loggedIn: false
}