import React, { Component, useState } from "react";
import Name from "./components/NameAnimation/NameAnimation";
import Controls from "./components/Controls/Controls";
import TestComponent from "./components/TestComponent/TestComponent";
import NavBar from "./components/NavBar/NavBar";
import { motion, useAnimation } from "framer-motion";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  
  const [loaded, setLoaded] = useState(false);
  const boxControls = useAnimation();

  const componentChoices = {
    components: [
      <Name refresh={refresh} />,
      <TestComponent refresh={refresh} />,
      <NavBar refresh={refresh} />,
    ],
    componentNames: ["Name", "Test Component", "Nav Bar"],
  };

  const [selected, setSelected] = useState(componentChoices.componentNames[0]);
  const [prevSelected, setPrevSelected] = useState(null);

  const handleSelect = (e) => {
    let index = componentChoices.componentNames.indexOf(e.target.value);

    boxControls.start({
      x: -(window.innerWidth * index),
      transition: {
        x: { duration: 2 },
      },
    });

    setPrevSelected(selected);
    setSelected(e.target.value);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
    setLoaded(!loaded);
  };

  return (
    <div id="app">
      <Controls
        handleClick={handleRefresh}
        componentNames={componentChoices.componentNames}
        selected={selected}
        handleSelect={handleSelect}
      />
      <motion.div animate={boxControls} className="component-slider">
        {componentChoices.componentNames.map((component) => {
          let index = componentChoices.componentNames.indexOf(component);
          return component === selected  || component === prevSelected ? (
            <motion.div
              className={`component-slider-box component-slider-box-${index}`}
              key={index}
              style={{ right: -(index * 100) + "vw" }}
            >
              {componentChoices.components[index]}
            </motion.div>
          ) : null;
        })}
      </motion.div>
    </div>
  );
};

export default App;
