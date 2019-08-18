import React from "react"
import { ActiveMenuLink } from "./activeLink"

const Header = () => {
  return (
    <header>
      <nav className="header-navbar" id="navbar">
        <ul className="header-menu">
          <li>
            <ActiveMenuLink activeOnlyWhenExact={true} to="/" label="About" />
          </li>
          <li>
            <ActiveMenuLink to="/projects" label="work" />
          </li>
          <li>
            <ActiveMenuLink to="/contact" label="contact" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
