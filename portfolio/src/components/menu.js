import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <header>
                <nav className="header-navbar" id="navbar">
                    <ul className="header-menu">
                        <li><Link to='/welcomeSection' className="nav-link">about</Link></li>
                        <li><Link to='/projects' className="nav-link">work</Link></li>
                        <li><Link to='/contact' className="nav-link">contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;