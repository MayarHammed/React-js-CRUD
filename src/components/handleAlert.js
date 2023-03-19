import React from 'react'


const handleAlert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};

export default handleAlert;
