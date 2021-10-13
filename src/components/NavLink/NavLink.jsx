import React from 'react';
import { motion } from "framer-motion";
import "./navLink.scss";

const NavLink = ({ text, link }) => {
    return ( 
        <motion.a className="navbar-link" href={link}>
            {text}
        </motion.a>
     );
}
 
export default NavLink;
