import { motion } from "framer-motion";
import React from "react";
import "./componentSlider.scss";

const ComponentSlider = ({ children }) => {
  

  return (
    <motion.div className="component-slider">
      {/* <div className="component-slider-box component-slider-left"></div>
      <div className="component-slider-box component-slider-middle"></div>
      <div className="component-slider-box component-slider-right"></div> */}
      {children}
    </motion.div>
  );
};

export default ComponentSlider;
