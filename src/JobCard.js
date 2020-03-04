import React from 'react';

function JobCard({ job }) {
  const { title, salary, equity } = { ...job };
  return (
    <div className="Card card col-md-4">
      <p>{title}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
};

export default JobCard;