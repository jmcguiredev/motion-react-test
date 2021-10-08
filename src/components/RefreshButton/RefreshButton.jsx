import React from "react";
import { RotateCw } from "react-feather";
import { motion, useAnimation } from "framer-motion";
import './refreshButton.scss';

const RefreshButton = ({ handleClick }) => {
  const rotateDur = 0.4;
  const hoverDur = 0.1;

  const controls = useAnimation();

  const tap = () => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: rotateDur },
    });
  };

  const hoverOn = () => {
    controls.start({
      scale: [1, 1.1],
      transition: { duration: hoverDur },
    });
  };

  const hoverOff = () => {
    controls.start({
      scale: [1.1, 1],
      transition: { duration: hoverDur },
    });
  };

  return (
    <motion.div
      animate={controls}
      onTap={tap}
      onClick={handleClick}
      onHoverStart={hoverOn}
      onHoverEnd={hoverOff}
    >
      <RotateCw className="reset-animation-button" color="white" />
    </motion.div>
  );
};

export default RefreshButton;
