import React, {useState} from 'react';

function LoginForm({login}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    login(formData);
  };

  return (
    <div>
      <form onSubmit={gatherInput} >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
            id="username"
            className="form-control col-6 mx-auto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={formData.password}
            className="form-control col-6 mx-auto"
          />
        </div>
        
        <button id="submitButton" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;