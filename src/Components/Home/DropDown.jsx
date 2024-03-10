
"use client"
// components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      <div className="dropdown-content">
        {options.map((option) => (
          <div key={option} onClick={() => handleSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
