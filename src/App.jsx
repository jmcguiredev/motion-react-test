import React, { Component, useState } from "react";
import Name from "./components/Name";
import Controls from "./components/Controls";


const App = () => {

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  return (
    <div id="app">
      <Controls handleClick={handleRefresh} />
      <Name refresh={refresh}/>
    </div>
  );
};

export default App;
