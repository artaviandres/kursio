import React from 'react';
import '../../styles/dropdown.scss';

export default function Dropdown({ options, changeLanguage }) {
  return (
    <select onChange={(e) => changeLanguage(e.target.value)} className="select-container">
      {options.map(option => <option value={option.value} key={option.value}>{option.text}</option>)}
    </select>
  );
}