import React, { useState, useEffect } from "react"
import { ActiveMenuLink } from "../activeLink"
import styles from "./Header.module.scss"
import i18n from "../../i18n"
import { useTranslation } from "react-i18next"

const Header = () => {
  const [lng, setLng] = useState("")

  useEffect(() => {
    setLng(i18n.language)
  })
  const { t } = useTranslation()

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
            <ActiveMenuLink
              activeOnlyWhenExact={true}
              to="/"
              label={t("About")}
            />
          </li>
          <li>
            <ActiveMenuLink to="/projects" label={t("Work")} />
          </li>
          <li>
            <ActiveMenuLink to="/contact" label={t("ContactMenu")} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
