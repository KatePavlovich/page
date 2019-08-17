import React, { Component } from 'react';
import {ActiveMenuLink} from './activeLink'

class Menu extends Component {
    render() {
        return (
            <header>
                <nav className="header-navbar" id="navbar">
                    <ul className="header-menu">
                        <li><ActiveMenuLink activeOnlyWhenExact={true} to="/" label="About" /></li>
                        <li><ActiveMenuLink to='/projects' label="work" /></li>
                        <li><ActiveMenuLink to='/contact' label="contact" /></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;