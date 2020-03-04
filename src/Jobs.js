import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

function Jobs() {
  // Get a list of all the companies and then map
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getJobs();
      setJobs(jobsResult);
    };
    fetchJobs();
  }, []);


  return (jobs.length ? 
  <div>
    {jobs.map(job => 
    <JobCard job={job} />
    )}
  </div>
  : "");
};

export default Jobs;