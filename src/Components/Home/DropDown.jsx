"use client";
// components/Dropdown.js
import { IoIosArrowDown } from "react-icons/io";
import localFont from "next/font/local";

const sanPro = localFont({
  src: "../../font/Value Sans Pro/ValueSansPro-Regular.ttf",
});

const Dropdown = ({ options, onSelect,name }) => {
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <div className={sanPro.className}>
        {" "}
        <button className="dropdown-button flex items-center gap-2 tex-[16px]  font-semibold">
          Pages <IoIosArrowDown />
        </button>
      </div>
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
