import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./style";

const HamburgerMenu = ({ refresh }) => {
  const [isOpen, setOpen] = useState(false);
  const menuControls = useAnimation();
  const menuWidth = "15rem";
  const duration = 3;

  const variants = {
    open: {
      width: menuWidth,
      height: "100%",
      borderRadius: "0rem",
    },
    closed: {
      width: "3rem",
      height: "3rem",
      borderRadius: "100rem",
      margin: "1rem 0rem 0rem 1rem",
    },
  };

  const handleClick = () => {
    // if (!isOpen) {
    //   menuControls.start({
    //     width: ["0rem", menuWidth],
    //     height: ["0%", "100%"],
    //     borderBottomRightRadius: ["5rem", "0rem"],
    //     transition: { duration: duration },
    //   });
    // } else {
    //   menuControls.start({
    //     width: [menuWidth, "0rem"],
    //     height: ["100%", "0%"],
    //     borderBottomRightRadius: ["0rem", "5rem"],
    //     transition: { duration: duration },
    //   });
    // }

    setOpen(!isOpen);
  };

  return (
    <motion.div className="hamburger-menu-cont">
      <motion.div
        className="hamburger-menu"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          width: { duration: 1, ease: "linear" },
          height: { duration: 1, ease: "linear" },
          borderRadius: { duration: 1, ease: "linear" },
        }}
      ></motion.div>
      <motion.div className="hamburger-menu-button" onClick={handleClick}>
        <motion.span className="button-stripe" id="button-stripe-2" />
        <motion.span className="button-stripe" id="button-stripe-1" />
        <motion.span className="button-stripe" id="button-stripe-3" />
      </motion.div>
    </motion.div>
  );
};

export default HamburgerMenu;
