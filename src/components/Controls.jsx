import React from "react";
import { RotateCw } from "react-feather";
import { motion } from "framer-motion";

const Controls = ({}) => {

  let variants = {
    start: { transform: "scale(1)" },
    finish: { transform: "scale(1.1)" },
    click: { transform: "rotate(180deg)" },
  };


  return (
    <div className="controls">
      <motion.div
        variants={variants}
        initial="start"
        whileHover="finish"
        whileTap="click"
        transition={{
          transform: { duration: 0.2 },
        }}
      >
        <RotateCw className="reset-animation" color="white" />
      </motion.div>
    </div>
  );
};

export default Controls;
