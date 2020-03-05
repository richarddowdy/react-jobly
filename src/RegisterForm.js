import React, { useState } from 'react';

// Define goToHome function in Login.js later

function RegisterForm({ register }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
    register(formData);
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
            className="form-control col-6 mx-auto"
          />
        </div>
        <div>
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
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="first_name"
            value={formData.firstName}
            id="first_name"
            className="form-control col-6 mx-auto"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            value={formData.lastName}
            id="last_name"
            className="form-control col-6 mx-auto"
          />
        </div>
        <div>
          <label htmlFor="photo_url">Photo URL</label>
          <input
            onChange={handleChange}
            type="text"
            name="photo_url"
            value={formData.photo_url}
            id="photo_url"
            className="form-control col-6 mx-auto"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email}
            id="email"
            className="form-control col-6 mx-auto"
          />
        </div>
        <button className="btn btn-primary" id="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;