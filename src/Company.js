import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany(handle) {
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);
    };

    fetchCompany(handle);
  }, [handle]);

  return (company ?
    <div >
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
      <div>
        {company.jobs.map(job => (
          <JobCard job={job} key={job.title} />
        ))}
      </div>
    </div>
    :
    "");
}

export default Company;