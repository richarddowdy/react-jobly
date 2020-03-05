import React, { useState, useContext } from 'react';
import { UserContext } from './App';

function Profile({ handleUpdate }) {

  const { user } = useContext(UserContext);
  const { username, first_name, last_name, email } = user;
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = async (evt) => {
    evt.preventDefault();

    let res = await handleUpdate({ formData });
    
    if (res.user) {
      setMessage(<div className="alert alert-success">Success!</div>);
    }
    else {
      setMessage(<div className="alert alert-danger">Unsuccessful</div>);
    }

  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          Username
          </div>
        <div>
          {username}

        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="first_name"
            value={formData.first_name}
            placeholder={user.first_name}
            id="first_name"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="last_name"
            value={formData.last_name}
            placeholder={user.last_name}
            id="last_name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email}
            placeholder={user.email}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            onChange={handleChange}
            type="text"
            name="photoUrl"
            value={formData.photoUrl}
            placeholder={user.photo_url}
            id="photoUrl"
          />
        </div>

        <div>
          <label htmlFor="password">Re-enter password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
            id="password"
          />
        </div>

        {message ? message : null}

        <button id="submitButton">Submit</button>
      </form>
    </div>
  )
}

export default Profile;

