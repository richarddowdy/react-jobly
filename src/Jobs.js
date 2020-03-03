import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';

function Jobs() {
  // Get a list of all the companies and then map
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getJobs();
      setJobs(jobsResult);
    };
    fetchJobs();
  }, []);


  return (jobs ? 
  <div>
    {jobs.map(job =>
      <div>
        <p>{job.title}</p>
        <p>{job.salary}</p>
        <p>{job.equity}</p>
      </div>
    )}
  </div>
  : "");
};

export default Jobs;