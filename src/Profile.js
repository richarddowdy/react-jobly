import React, {useState}from 'react';

function Profile({ username, firstName, lastName, email }) {

  const [formData, setFormData] = useState({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    photoUrl: "",
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
    // updateUser({formData});   FOR LATER
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
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formData.lastName}
            id="lastName"
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
          />
        </div>
        <div>
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            onChange={handleChange}
            type="text"
            name="photoUrl"
            value={formData.photoUrl}
            id="photoUrl"
          />
        </div>

        <button id="submitButton">Submit</button>
      </form>
    </div>
  )
}

export default Profile;

Profile.defaultProps = {
  username: "user1",
  firstName: "first1",
  lastName: 'last1',
  email: 'email1',
  photoUrl: ""
}