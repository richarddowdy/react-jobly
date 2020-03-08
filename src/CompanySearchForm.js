import React, { useState } from 'react';

function CompanySearchForm({ searchCompanies }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    searchCompanies(formData);
  };

  return (
    <div className="m-6 col-3 mx-auto">
      <form className="form-inline" onSubmit={gatherInput}>
        <div>
          <input class="form-control flex-grow"
            onChange={handleChange}
            type="text"
            name="searchTerm"
            value={formData.searchTerm}
            placeholder="Enter search term"
            id="searchTerm"
          />
        </div>
        <button className="btn btn-primary" id="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default CompanySearchForm;