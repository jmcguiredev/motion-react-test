import React from "react";
import { RotateCw } from "react-feather";
import { motion } from "framer-motion";

const Controls = ({}) => {
  return (
    <div className="controls">
      <motion.div
        variants={{ start: { transform: "scale(0.9) rotate(0deg)"}, finish: { transform: "scale(1) rotate(180deg)"} }}
        initial="start"
        whileHover="finish"
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
