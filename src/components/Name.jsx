import React, { useState } from "react";
import { motion } from "framer-motion";
// paths generated on https://danmarshall.github.io/google-font-to-svg-path/
const { hello, jmcguiredev } = require("../paths.json");
const TextToSVG = require("text-to-svg");

let nameSize = 0.75;

const nameVariants = {
  start: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgb(243, 0, 162)",
  },
  finish: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgb(250, 0, 229)",
  },
};

const containerVariants = {
    start: {
        y: -800,
        background: "rgb(50, 16, 56, 0)",
    },
    finish: {
        y: -50,
        background: "rgb(17, 16, 56, 1)",
    }
}

const Name = () => {
  return (
    <motion.div 
        className="container" 
        style={{ transform: `scale(${nameSize})`}} 
        variants={containerVariants}
        initial="start"
        animate="finish"
        transition={{ 
            y: { duration: 2, ease: "easeOut" },
            background: { duration: 3}
            }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="175 -50 200 200"
        className="item"
      >
        <motion.path
          d={jmcguiredev}
          variants={nameVariants}
          initial="start"
          animate="finish"
          transition={{
            stroke: { duration: 3 },
            pathLength: { duration: 15}
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Name;
