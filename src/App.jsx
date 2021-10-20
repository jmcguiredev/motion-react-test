import React, { Component, useState } from "react";
import Name from "./components/NameAnimation/NameAnimation";
import Controls from "./components/Controls/Controls";
import TestComponent from "./components/TestComponent/TestComponent";
import NavBar from "./components/NavBar/NavBar";
import ComponentSlider from "./components/ComponentSlider/ComponentSlider";
import { useAnimation } from "framer-motion";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const boxControls = useAnimation();

  const componentChoices = {
    components: [
      <Name refresh={refresh} />,
      <HamburgerMenu refresh={refresh} />,
      <NavBar refresh={refresh} />,
    ],
    componentNames: ["Name", "Hamburger Menu", "Nav Bar"],
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
      <ComponentSlider
        boxControls={boxControls}
        componentChoices={componentChoices}
        selected={selected}
        prevSelected={prevSelected}
      />
    </div>
  );
};

export default App;
