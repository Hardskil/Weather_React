import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Header.css'
function Header() {
    return (
        <div className="header">
            <div className="url-header">
                <Link to="#">АКЦИИ</Link>
                <Link to="#">НОВИНКИ</Link>
                <Link to="#">SALE</Link>
            </div>
            <div className="title-header">
                <h2>SOKOLOV</h2>
            </div>
            <div className="phone-header">
                <i>+998 90 100-07-50</i>
            </div>
        </div>
    )
}

export default Header
