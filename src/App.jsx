import React, { Component, useState } from "react";
import Name from "./components/NameAnimation/NameAnimation";
import Controls from "./components/Controls/Controls";
import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(Name.name);

  const componentChoices = {
    components: [<Name refresh={refresh} />, <TestComponent refresh={refresh} />],
    componentNames: [Name.name, TestComponent.name],
  };

  const handleSelect = (e) => {
    console.log(e);
    setSelected(e.target.value);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const renderSelected = () => {
    let compIndex = componentChoices.componentNames.indexOf(selected);
    return componentChoices.components[compIndex];
  };

  return (
    <div id="app">
      <Controls
        handleClick={handleRefresh}
        componentNames={componentChoices.componentNames}
        selected={selected}
        handleSelect={handleSelect}
      />
      {renderSelected()}
    </div>
  );
};

export default App;
