import React, { useState } from "react"
import { ActiveMenuLink } from "../activeLink"
import styles from "./Header.module.scss"
import i18n from "../../i18n"

const Header = () => {
  const [lng, setLng] = useState("en")

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
    setLng(lng)
  }

  return (
    <header>
      {lng === "en" && (
        <button
          className={styles.languageBtn}
          onClick={() => changeLanguage("ru")}
        >
          ru
        </button>
      )}
      {lng === "ru" && (
        <button
          className={styles.languageBtn}
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
      )}
      <nav className={styles.navbar}>
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
