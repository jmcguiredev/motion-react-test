import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import NavLink from '../NavLink/NavLink';
import './navbar.scss'

const NavBar = () => {

    const links = [
        {
            text: "Home",
             link:"#"
        },
        {
            text: "About Us",
             link:"#"
        },
        {
            text: "Contact",
             link:"#"
        }
    ];

    return ( 
        <motion.nav className="navbar">
            {links.map((link) => (
                <NavLink text={link.text} link={link.link}/>
            ))}
        </motion.nav>
     );
}
 
export default NavBar;