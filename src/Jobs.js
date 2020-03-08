import React, { useState, useEffect, useContext } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import { UserContext } from './App';
import { Redirect } from 'react-router-dom';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getJobs();
      setJobs(jobsResult);
    };
    fetchJobs();
  }, []);

  if (!user) {
    return <Redirect to='/login' />;
  };

  return (jobs.length ?
    <div>
      {jobs.map(job =>
        <JobCard job={job} key={job.id} appliedStatus={job.state} />
      )}
    </div>
    : "");
};

export default Jobs;