import React from 'react';

 const Tab = ({ active, label, handleOnClick, index }) => (
  <li className="nav-item">
    <a onClick={handleOnClick.bind(this, index)} className={`nav-link ${active ? "active" : ""}`} >{label}</a>
  </li>
);

export default Tab;