import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// paths generated on https://danmarshall.github.io/google-font-to-svg-path/
const { jmcguiredev } = require("../../paths.json");
import "./style";

const NameWaterFill = React.memo(({ refresh, loaded }) => {
  const contControls = useAnimation();
  const textControls = useAnimation();
  const nameSizeStart = 0.3;
  const nameSizeEnd = 0.75;

  useEffect(() => {
    load();
  });

  const load = () => {
 
  };

  return (
    <motion.div className="name-container" animate={contControls}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="175 -50 200 200"
        className="name-svg"
      >
        <motion.clipPath id="myClip">
          <motion.rect width="1000" height="50"/>
        </motion.clipPath>
        <motion.path  id="name-fill" d={jmcguiredev} animate={textControls} />
        <motion.use clipPath="url(#myClip)" xlinkHref="#name-fill" fill="red" />
      </motion.svg>
    </motion.div>
  );
});

export default NameWaterFill;
