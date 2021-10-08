import React from "react";

import RefreshButton from "./RefreshButton";

const Controls = ({ handleClick }) => {
  return (
    <div className="controls">
      <RefreshButton handleClick={handleClick} />
    </div>
  );
};

export default Controls;
