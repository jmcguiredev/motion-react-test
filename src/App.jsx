import React, { Component } from "react";
import Name from "./components/Name";
import Controls from "./components/Controls";


const App = () => {

  const handleRefresh = () => {

  }

  return (
    <div id="app">
      <Controls />
      <Name />
    </div>
  );
};

export default App;
