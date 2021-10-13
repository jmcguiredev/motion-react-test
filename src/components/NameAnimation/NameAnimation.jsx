import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// paths generated on https://danmarshall.github.io/google-font-to-svg-path/
const { jmcguiredev } = require("../../paths.json");
import './style'

const NameAnimation = React.memo(({ refresh, loaded }) => {

  const contControls = useAnimation();
  const textControls = useAnimation();
  const nameSizeStart = 0.3;
  const nameSizeEnd = 0.75;

  useEffect(() => {
    load();
  });

  

  const load = () => {
    
    textControls.start({
      pathLength: [0, 1],
      fill: "rgba(255, 255, 255, 0)",
      stroke: ["rgb(243, 0, 162, 0)", "rgb(250, 0, 229, 1)"],
      transition: { pathLength: { duration: loaded ? 0 : 15 }, stroke: { duration: loaded ? 0 : 4 } },
    });

    contControls.start({
      y: [-800, -50],
      background: ["rgb(50, 16, 56, 0)", "rgb(50, 16, 56, 1)"],
      scale: [nameSizeStart, nameSizeEnd],
      transition: {
        y: { duration: loaded ? 0 : 2, ease: "easeOut" },
        background: { duration: loaded ? 0 : 3 },
        scale: { duration: loaded ? 0 : 5, ease: "easeOut" },
      },
    });
  };

  return (
    <motion.div className="name-container" animate={contControls}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="175 -50 200 200"
        className="name-svg"
      >
        <motion.path d={jmcguiredev} animate={textControls} />
      </motion.svg>
    </motion.div>
  );
});

export default NameAnimation;
