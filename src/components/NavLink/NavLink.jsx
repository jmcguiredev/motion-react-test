import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./navLink.scss";

const NavLink = ({ text, link, isSelected, onClick }) => {
  

  useEffect(() => {
    aControl.start({
        color: isSelected ? "rgb(0, 197, 148)" : "#fff"
      });
  })

  const aControl = useAnimation();
  const hoverDur = 0.33;

  const hoverOn = () => {
    if (!isSelected) {
      aControl.start({
        color: ["#fff", "rgb(0, 197, 148)"],
        transition: { duration: hoverDur },
      });
    }
  };
  const hoverOff = () => {
    if (!isSelected) {
      aControl.start({
        color: ["rgb(0, 197, 148)", "#fff"],
        transition: { duration: hoverDur },
      });
    }
  };

  return (
    <motion.div className="navbar-link-container">
      <motion.a
        className="navbar-link"
        animate={aControl}
        href={link}
        onClick={onClick}
        onHoverStart={hoverOn}
        onHoverEnd={hoverOff}
      >
        {text}
      </motion.a>
      {isSelected && (
        <motion.div layoutId="underline" className="underline"></motion.div>
      )}
    </motion.div>
  );
};

export default NavLink;
