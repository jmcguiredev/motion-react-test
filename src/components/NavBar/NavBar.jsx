import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import NavLink from "../NavLink/NavLink";
import "./navbar.scss";

const NavBar = () => {
  const links = [
    {
      text: "Home",
      link: "#",
    },
    {
      text: "About Us",
      link: "#",
    },
    {
      text: "Contact",
      link: "#",
    },
  ];

  const [selected, setSelected] = useState(links[0].text);

  const handleClick = (text) => {
    setSelected(text);
  };

  useEffect(() => {
    console.log(selected);
  });

  return (
    <AnimateSharedLayout>
      <motion.nav className="navbar">
        {links.map((link) => (
          <NavLink
            key={link.text}
            text={link.text}
            link={link.link}
            onClick={() => setSelected(link.text)}
            isSelected={selected === link.text}
          />
        ))}
      </motion.nav>
      </AnimateSharedLayout>
  );
};

export default NavBar;
