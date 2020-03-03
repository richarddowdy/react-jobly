import React from 'react';

function Home ({ loggedIn }){

  console.log("home", loggedIn)
  return (

    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>
      {loggedIn ?
      <h3>Welcome Back!</h3> :
      <button>Log In!</button>
      }
    </div>
  )

}

export default Home;

Home.defaultProps = {
  loggedIn: true
}