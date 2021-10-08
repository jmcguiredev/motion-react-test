import React from "react";
import RefreshButton from "../RefreshButton/RefreshButton";
import './controls.scss';

const Controls = ({ handleClick }) => {
  return (
    <div className="controls">
      <RefreshButton handleClick={handleClick} />
    </div>
  );
};

export default Controls;
