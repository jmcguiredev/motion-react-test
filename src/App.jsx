import React, { Component, useState } from "react";
import Name from "./components/NameAnimation/NameAnimation";
import Controls from "./components/Controls/Controls";
import TestComponent from "./components/TestComponent/TestComponent";
import { motion, useAnimation } from "framer-motion";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [selected, setSelected] = useState(Name.name);
  const [resized, setResized] = useState(false);
  const [next, setNext] = useState(null);
  const boxControls = useAnimation();

  const componentChoices = {
    components: [
      <Name refresh={refresh} />,
      <TestComponent refresh={refresh} />,
    ],
    componentNames: [Name.name, TestComponent.name],
  };

  const handleSelect = (e) => {
    setNext(e.target.value);

    let index = componentChoices.componentNames.indexOf(e.target.value);
    setSelected(e.target.value);
    boxControls.start({
      x: -(window.innerWidth * index),
      transition: {
        right: { duration: 1 }
      }
    }).then(() => {
      
      setNext(null);
    });

  }

  const handleRefresh = () => {
    setRefresh(!refresh);
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
            return (
              <motion.div
                className={`component-slider-box component-slider-box-${index}`}
                key={index}
                style={{ right: -((index) * 100) + "vw" }}
              >
                {componentChoices.components[index]}
              </motion.div>
            );
        })}
      </motion.div>
    </div>
  );
};

export default App;
