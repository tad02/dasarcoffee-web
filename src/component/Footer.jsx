import React from 'react';
import './Footer.scss'
import imgFooter from '/testimg.jpg';

function Footer() {
    return ( 
        <>
            <img className="footer" src={imgFooter} />
        </>
    );
}

export default Footer;