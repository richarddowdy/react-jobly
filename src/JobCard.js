import React, { useContext, useState } from 'react';
import JoblyApi from './JoblyApi';
import {UserContext} from './App';

function JobCard({ job, appliedStatus }) {
  const [applied, setApplied] = useState(appliedStatus);

  const { title, salary, equity, id } = { ...job };

  const { user } = useContext(UserContext);

  const handleApply = async (id) => {
    console.log("user username", user.username)
    let res = await JoblyApi.apply(id, user.username)
    if(res.message === "applied"){
      setApplied(true);
    }
  };

  return (
    <div className="m-3 col-6 card mx-auto">
      <p><b>{title}</b></p>
      <div>Salary: {salary}</div>
      <p>Equity: {equity}</p>
      {applied ? 
      <button type="button" disabled className="btn btn-danger" >Applied</button>
      :
      <button onClick={() => handleApply(id)} type="button" className="btn btn-danger">Apply</button>
      }
    </div>
  );
};

export default JobCard;