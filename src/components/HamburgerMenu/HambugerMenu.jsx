import React, { useState } from 'react';
import './style';

const HambugerMenu = () => {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {

    }

    return ( 
        <div className="hamburger-menu-cont">
            <div className="hamburger-menu-button">
                <span className="button-stripe" id="button-stripe-1"/>
                <span className="button-stripe" id="button-stripe-2"/>
                <span className="button-stripe" id="button-stripe-3"/>
            </div>
        </div>
     );
}
 
export default HambugerMenu;