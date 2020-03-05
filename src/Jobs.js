import React, { useState, useEffect, useContext } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import { UserContext } from './App';
import { Redirect } from 'react-router-dom';

function Jobs() {
  // Get a list of all the companies and then map
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
        <JobCard job={job} key={job.id} />
      )}
    </div>
    : "");
};

export default Jobs;