import React from 'react';
import { NavLink } from "react-router-dom";
import "../Style/Footer.css";
function Footer({ arrLink }) {
    return (
        <div className='Footer'>
            {arrLink.map((val, i) => {
                return (
                    <NavLink key={i} to={val.url}>{val.txt}</NavLink>
                );
            })}
            <span className='copirating'>&#169; Все права защищены</span>
        </div>
    );
}

export default Footer;