import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import JoblyApi from './JoblyApi';
import { useHistory } from 'react-router-dom';
import { UserContext } from './App';


function Login({ handleLogin }) {
  const [loginForm, setLoginForm] = useState(true);
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  // Might put login/register in one function
  async function login(data) {

    const resp = await JoblyApi.login(data);

    if (resp.token) {
      handleLogin(resp.token);
      let {user} = await JoblyApi.getUser(data.username);
      setUser(user);
      history.push("/");
    };
  };

  async function register(data) {
    const resp = await JoblyApi.register(data);
    if (resp.token) {
      handleLogin(resp.token);
      let user = await JoblyApi.getUser(data.username);
      setUser(user);
      history.push("/");
    };
  };

  return (
    <div>
      <button onClick={() => setLoginForm(true)} className="btn btn-primary">Login</button>
      <button onClick={() => setLoginForm(false)} className="btn btn-primary">Register</button>
      {loginForm ? <LoginForm login={login} /> : <RegisterForm register={register} />}
    </div>
  );
};

export default Login;

Login.defaultProps = {
  loggedIn: false
}