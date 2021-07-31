import React from "react"
import { ActiveMenuLink } from "../activeLink"
import styles from "./Header.module.scss"
import i18n from "../../i18n"
import { useTranslation } from "react-i18next"

const reverseLanguage = lng => lng === 'ru' ? 'en' : 'ru';

const Header = () => {
  const { t } = useTranslation()

  const changeLanguage = () => i18n.changeLanguage(reverseLanguage(i18n.language))

  return (
    <header>
      <button
        className={styles.languageBtn}
        onClick={changeLanguage}
      >
        {reverseLanguage(i18n.language)}
      </button>
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
