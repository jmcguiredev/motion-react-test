import { motion, useAnimation } from "framer-motion";
import React from "react";
import "./style";

const ComponentSlider = ({
  boxControls,
  componentChoices,
  selected,
  prevSelected,
}) => {
  return (
    <motion.div animate={boxControls} className="component-slider">
      {componentChoices.componentNames.map((component) => {
        let index = componentChoices.componentNames.indexOf(component);
        
        return component === selected || component === prevSelected ? (
          <motion.div
            className={`component-slider-box component-slider-box-${index}`}
            key={index}
            style={{ right: -((index) * 100) + "vw" }}
          >
            {componentChoices.components[index]}
          </motion.div>
        ) : null;
      })}
    </motion.div>
  );
};

export default ComponentSlider;
