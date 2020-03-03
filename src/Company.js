import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

function Company() {
  const { handle } = useParams();
  console.log(handle);

  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany(handle) {
      const companyResult = await JoblyApi.getCompany(handle);
      setCompany(companyResult);
    };

    fetchCompany(handle);
  }, []);


  console.log(company);
  return (company ?
    <div>
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>
      <div>
        {company.jobs.map(job => (
          <div>
            <p>{job.title}</p>
            <p>{job.salary}</p>
            <p>{job.equity}</p>
          </div>
        ))}
      </div>
    </div>
    :
    "");
}

export default Company;