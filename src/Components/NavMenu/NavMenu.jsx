
"use client"

// pages/index.js
import React from 'react';
import Dropdown from '../Home/DropDown';
import localFont from "next/font/local";

const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

const options = ['Item 1', 'Item 2', 'Item 3'];
 
 
const NavMenu = () => {
  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <div className={sanPro.className}>
      
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default NavMenu;