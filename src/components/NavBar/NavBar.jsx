import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import './navbar.scss'

const NavBar = () => {
    return ( 
        <motion.nav className="navbar">
            <motion.a className="navbar-link" href="#">Home</motion.a>
            <motion.a className="navbar-link" href="#">About Us</motion.a>
            <motion.a className="navbar-link" href="#">Contact</motion.a>
        </motion.nav>
     );
}
 
export default NavBar;