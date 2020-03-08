import React from 'react';

function CompanyCard({ company }) {
  const {name, description, logo_url} = {...company};
  return (
    <div className="m-3 col-8 card mx-auto">
      <h5 classname="card-title">{name}</h5>
      <p classname="card-text">{description}</p>
      <img src={logo_url} alt="Company Logo" />
    </div>
  );
};

export default CompanyCard;