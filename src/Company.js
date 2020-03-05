import React, { useState, useEffect, useContext } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import { UserContext } from './App';
import { Redirect } from 'react-router-dom';

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const { user } = useContext(UserContext);
  let [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function fetchCompany(handle) {
      // Have to make 2 API requests as we do not want to change the backend
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);
      jobs = await JoblyApi.getJobs();
      setJobs(jobs.filter(job => job.company_handle === handle));
    };
    fetchCompany(handle);
  }, [handle]);

  if (!user) {
    return <Redirect to='/login' />;
  };



  return (company ?
    <div >
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
      <div>
        {jobs ? jobs.map(job => (
          <JobCard job={job} key={job.title} appliedStatus={job.state} />
        )) : ""}
      </div>
    </div>
    :
    "");
}

export default Company;