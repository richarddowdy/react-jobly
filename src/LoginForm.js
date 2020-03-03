import React, {useState} from 'react';

// Define goToHome function in Login.js later

function LoginForm({goToHome}) {
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
    goToHome({formData});
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            // Password gives stars?
            type="password"
            name="password"
            id="password"
            value={formData.password}
          />
        </div>
        
        <button id="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;