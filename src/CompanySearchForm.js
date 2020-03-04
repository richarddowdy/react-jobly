import React, { useState } from 'react';

// Define goToHome function in Login.js later

function CompanySearchForm({ searchCompanies }) {
  const [formData, setFormData] = useState({
    searchTerm : ""
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
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="searchTerm"
            value={formData.searchTerm}
            placeholder = "Enter search term"
            id="searchTerm"
          />
        </div>
        <button id="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default CompanySearchForm;