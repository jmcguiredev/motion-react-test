import React, { useState } from "react";
import { motion } from "framer-motion";
// paths generated on https://danmarshall.github.io/google-font-to-svg-path/
const { hello, jmcguiredev } = require("../paths.json");
const TextToSVG = require("text-to-svg");

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgb(243, 0, 162)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgb(21, 255, 0)",
  },
};

const Name = () => {
  return (
    <motion.div className="container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="175 -50 200 200"
        className="item"
      >
        <motion.path
          d={jmcguiredev}
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            stroke: { duration: 3 },
            pathLength: { duration: 10}
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Name;
