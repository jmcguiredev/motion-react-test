import React from "react";
import { motion } from "framer-motion";
import "./navLink.scss";

const NavLink = ({ text, link, isSelected, onClick }) => {
  return (
    <motion.div className="navbar-link-container">
      <motion.a
        className="navbar-link"
        href={link}
        style={
          isSelected
            ? {
                color: "rgb(0, 197, 148)",
              }
            : null
        }
        onClick={onClick}
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
