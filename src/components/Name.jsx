import React, { useState } from 'react';
import { motion } from 'framer-motion';
const TextToSVG = require('text-to-svg');





const name = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
    }
}

const Name = () => {
    const [svgPathD, setSvgPathD] = useState('');

    const attributes = { fill: 'black', stroke: 'white' };
    const options = { x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes };

    TextToSVG.load('', function (err, textToSVG) {
        setSvgPathD(textToSVG.getD('hello', options));
    });
    return (
        <div id="name">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5 }}
                className="box" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
            >
                <motion.path
                    d={svgPathD}
                    variants={name}
                    initial="hidden"
                    animate="visible"
                />
            </svg>
        </div>
    );
}

export default Name;