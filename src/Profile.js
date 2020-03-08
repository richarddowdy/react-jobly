import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import JoblyApi from './JoblyApi';

function Profile() {

  const { user, setUser } = useContext(UserContext);
  const { username, first_name, last_name, email } = user;
  const [message, setMessage] = useState(null);


  const handleUpdate = async (data) => {
    let res = await JoblyApi.update(user.username, data);
    if (res) {
      setUser(res.user);
    }
    return res;
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photo_url: "",
    password: ""
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
          <label htmlFor="photo_url">Photo URL</label>
          <input
            onChange={handleChange}
            type="text"
            name="photo_url"
            value={formData.photo_url}
            placeholder={user.photo_url}
            id="photo_url"
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

        <button className= "btn btn-primary" id="submitButton">Submit</button>
      </form>
    </div>
  )
}

export default Profile;

