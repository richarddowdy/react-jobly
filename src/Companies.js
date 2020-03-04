import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import CompanySearchForm from './CompanySearchForm';

function Companies() {
  // Get a list of all the companies and then map
  const [companies, setCompanies] = useState([]);
  

  useEffect(() => {
    async function fetchCompanies() {
      const companiesResult = await JoblyApi.getCompanies();
      setCompanies(companiesResult);
    };
    fetchCompanies();
  }, []);

  async function searchCompanies({ searchTerm }) {
    let data = { search: searchTerm };
    const companiesResult = await JoblyApi.getCompanies(data);
    setCompanies(companiesResult);
  };

  return (companies.length ?
    <div classname="col-md-8">
      <CompanySearchForm searchCompanies={searchCompanies} />
      {companies.map(company =>
        <CompanyCard company={company} key={company.handle} />
        )}
    </div>
    : "");
};

export default Companies;