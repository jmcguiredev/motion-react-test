import React from 'react';
import { motion } from 'framer-motion';

const Name = () => {
    return ( 
        <div id="name">
            <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 5 }}
            className="box"/>
        </div>
     );
}
 
export default Name;