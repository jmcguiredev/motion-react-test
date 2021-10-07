import React, { useState, useEffect } from "react";
import { RotateCw } from "react-feather";
import { motion, useTransform, useAnimation } from "framer-motion";

const Controls = ({}) => {

  const controls = useAnimation();

  const tap = () => {
    controls
      .start({
        transform: "rotate(360deg)",
        transition: { duration: 0.4 },
      })
      .then(() => {
        controls.start({
          transform: "rotate(0deg)",
          transition: { duration: 0 },
        });
      });
  };

  return (
    <div className="controls">
      <motion.div
        animate={controls}
        onTap={tap}
      >
        <RotateCw className="reset-animation" color="white" />
      </motion.div>
    </div>
  );
};

export default Controls;
