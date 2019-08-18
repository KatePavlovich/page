import React from "react"
import { ActiveMenuLink } from "../activeLink"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar} id="navbar">
        <ul className={styles.menu}>
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
