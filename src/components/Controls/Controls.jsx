import React from "react";
import RefreshButton from "../RefreshButton/RefreshButton";
import "./controls.scss";

const Controls = ({ handleClick, componentNames, selected, handleSelect }) => {
  return (
    <div className="controls">
      <select
        className="controls-select"
        value={selected}
        onChange={handleSelect}
      >
        {componentNames.map((componentName) => (
          <option key={componentName} value={componentName}>
            {componentName}
          </option>
        ))}
      </select>
      <RefreshButton handleClick={handleClick} />
    </div>
  );
};

export default Controls;
