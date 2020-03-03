import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JoblyApi from './JoblyApi';

function Companies() {
  // Get a list of all the companies and then map
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    async function fetchCompanies() {
      const companiesResult = await JoblyApi.getCompanies();
      setCompanies(companiesResult);
    };
    fetchCompanies();
  }, []);


return (companies ? <div>{companies.map(company=><div>{company.name}</div>)}</div> : "");
};

export default Companies;