import React from 'react';

function CompanyCard({ company }) {
  const {name, description, logo_url} = {...company};
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <img src={logo_url} />
    </div>
  );
};

export default CompanyCard;