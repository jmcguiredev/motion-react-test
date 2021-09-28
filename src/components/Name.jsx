import React, { useState } from 'react';
import { motion } from 'framer-motion';
const TextToSVG = require('text-to-svg');





const name = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

const svgPathD = "M5.27-3.66L5.27-54.07L10.62-54.07L10.62-34.00Q15.86-39.23 21.02-39.23L21.02-39.23Q26.89-39.23 29.60-34.07L29.60-34.07Q31.11-31.15 31.11-27L31.11-27L31.11-3.66L25.77-3.66L25.77-25.42Q25.77-34.14 20.18-34.14L20.18-34.14Q16.42-34.14 13.57-31.39L13.57-31.39Q10.62-28.44 10.62-24.64L10.62-24.64L10.62-3.66L5.27-3.66ZM62.05-14.27L67.68-14.27Q64.55-2.25 54.07-2.25L54.07-2.25Q47.57-2.25 43.77-7.66L43.77-7.66Q40.32-12.62 40.32-20.74L40.32-20.74Q40.32-28.51 43.56-33.47L43.56-33.47Q47.36-39.23 54-39.23L54-39.23Q66.97-39.23 67.82-19.65L67.82-19.65L45.74-19.65Q46.16-7.07 54.14-7.07L54.14-7.07Q60.47-7.07 62.05-14.27L62.05-14.27ZM45.95-24.26L62.05-24.26Q60.89-34.42 54-34.42L54-34.42Q47.36-34.42 45.95-24.26L45.95-24.26ZM92.81-54.07L92.81-11.53Q92.81-8.44 95.77-8.44L95.77-8.44Q98.19-8.44 101.07-9L101.07-9L101.07-3.62Q96.82-3.02 94.82-3.02L94.82-3.02Q87.19-3.02 87.19-10.51L87.19-10.51L87.19-54.07L92.81-54.07ZM128.81-54.07L128.81-11.53Q128.81-8.44 131.77-8.44L131.77-8.44Q134.19-8.44 137.07-9L137.07-9L137.07-3.62Q132.82-3.02 130.82-3.02L130.82-3.02Q123.19-3.02 123.19-10.51L123.19-10.51L123.19-54.07L128.81-54.07ZM162.07-39.23L162.07-39.23Q168.68-39.23 172.44-33.40L172.44-33.40Q175.68-28.55 175.68-20.74L175.68-20.74Q175.68-14.87 173.74-10.44L173.74-10.44Q170.16-2.21 161.93-2.21L161.93-2.21Q155.57-2.21 151.77-7.63L151.77-7.63Q148.32-12.59 148.32-20.74L148.32-20.74Q148.32-29.53 152.30-34.56L152.30-34.56Q156.09-39.23 162.07-39.23ZM161.93-34.21L161.93-34.21Q158.06-34.21 155.88-30.16L155.88-30.16Q153.95-26.61 153.95-20.74L153.95-20.74Q153.95-15.33 155.53-11.92L155.53-11.92Q157.71-7.24 162-7.24L162-7.24Q165.94-7.24 168.12-11.29L168.12-11.29Q170.05-14.84 170.05-20.67L170.05-20.67Q170.05-26.75 168.05-30.23L168.05-30.23Q165.90-34.21 161.93-34.21Z";
const testD = "M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z";
const Name = () => {

    
    return (
        <div id="name">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5 }}
                className="box" />
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="item"
            >
                <motion.path
                    d={svgPathD}
                    variants={name}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 10, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                      }}
                />
            </motion.svg>
        </div>
    );
}

export default Name;