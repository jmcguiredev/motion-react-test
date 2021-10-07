import React, { useState, useEffect } from "react";
import { RotateCw } from "react-feather";
import { motion, useTransform, useAnimation } from "framer-motion";

const Controls = ({}) => {

  const rotateDur = 0.4;
  const hoverDur = 0.1;

  const controls = useAnimation();

  const tap = () => {
    controls
      .start({
        rotate: [0, 360],
        transition: { duration: rotateDur },
      });
  };

  const hoverOn = () => {
    controls.start({
      scale: [1, 1.1],
      transition: { duration: hoverDur }
    });
  }

  const hoverOff = () => {
    controls.start({
      scale: [1.1, 1],
      transition: { duration: hoverDur }
    })
  }

  return (
    <div className="controls">
      <motion.div
        animate={controls}
        onTap={tap}
        onHoverStart={hoverOn}
        onHoverEnd={hoverOff}
      >
        <RotateCw className="reset-animation" color="white" />
      </motion.div>
    </div>
  );
};

export default Controls;
