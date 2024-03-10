
"use client"

// pages/index.js
import React from 'react';
import Dropdown from '../Home/DropDown';
 
const options = ['Option 1', 'Option 2', 'Option 3'];
 
 
const NavMenu = () => {
  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <div className={myFont.className}>
      <h1>Next.js Dropdown Menu</h1>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default NavMenu;