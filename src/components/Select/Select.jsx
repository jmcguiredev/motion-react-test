import React from "react";
import './select.scss';

const Select = ({ componentNames, selected, handleSelect }) => {
  return (
    <div className="controls-select-container">
      <select
        className="controls-select"
        value={selected}
        onChange={handleSelect}
      >
        {componentNames.map((componentName) => (
          <option
            className="controls-select-option"
            key={componentName}
            value={componentName}
          >
            {componentName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
