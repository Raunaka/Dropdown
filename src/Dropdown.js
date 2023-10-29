import React, { useState } from 'react';

const Dropdown = () => {
  const [isActive, setActive] = useState(false);
  const [options] = useState(['Yes', 'no']);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActive(false);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Should you use a dropdown?</h1>
      <h3>{selectedOption}</h3>
      <div className="d-inline-block position-relative">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => setActive(!isActive)}
        >
          Select
        </button>
        <div
          className={`dropdown-menu text-center ${isActive ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton"
        >
          {options.map((option, index) => (
            <a
              className="dropdown-item"
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
