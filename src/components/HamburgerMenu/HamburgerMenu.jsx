import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./style";

const HamburgerMenu = ({ refresh }) => {
  const [isOpen, setOpen] = useState(false);

  const menuControls = useAnimation();

  
    // menuControls.start({
    //   width: 0,
    //   height: 0,
    //   borderBottomRightRadius: "5rem"
    // });
  

  // refresh ? null : reset();

  const menuWidth = "15rem";

  

  

  const handleClick = () => {

    if(!isOpen) {
      menuControls.start({
        width: ["0rem", menuWidth],
        height: ["0%", "100%"],
        borderBottomRightRadius: ["5rem", "0rem"],
        transition: { duration: 3 }
      });
    } else {
      menuControls.start({
        width: [menuWidth, "0rem"],
        height: ["100%", "0%"],
        borderBottomRightRadius: ["0rem", "5rem"],
        transition: { duration: 3 }
      });
    }

    setOpen(!isOpen);
    
  };

  return (
    <motion.div className="hamburger-menu-cont">
      <motion.div className="hamburger-menu" animate={menuControls} >
        
      </motion.div>
      <motion.div className="hamburger-menu-button" onClick={handleClick}>
          <motion.span className="button-stripe" id="button-stripe-2" />
          <motion.span className="button-stripe" id="button-stripe-1" />
          <motion.span className="button-stripe" id="button-stripe-3" />
        </motion.div>
    </motion.div>
  );
};

export default HamburgerMenu;
