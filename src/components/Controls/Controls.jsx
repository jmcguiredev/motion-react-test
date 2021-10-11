import React from "react";
import RefreshButton from "../RefreshButton/RefreshButton";
import Select from "../Select/Select";
import "./controls.scss";

const Controls = ({ handleClick, componentNames, selected, handleSelect }) => {
  return (
    <div className="controls">
      <Select
        componentNames={componentNames}
        selected={selected}
        handleSelect={handleSelect}
      />
      <RefreshButton handleClick={handleClick} />
    </div>
  );
};

export default Controls;
