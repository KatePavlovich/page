import React from "react"
import withLayout from "../Layout"
import { ReactComponent as Github } from "../../img/github.svg"
import { ReactComponent as Envelope } from "../../img/envelope.svg"
import { ReactComponent as Linkedin } from "../../img/linkedin.svg"
import { ReactComponent as Phone } from "../../img/phone.svg"
import { useTranslation } from "react-i18next"
import styles from "./Contact.module.scss"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.contactSection}>
      <nav className={styles.contactListWrapper}>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <a
              href="https://github.com/KatePavlovich"
              target="blank"
              aria-label="github"
            >
              <Github />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a
              href="https://www.linkedin.com/in/ekaterinaPaulovich/"
              target="blank"
              aria-label="linkedIn"
            >
              <Linkedin />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="mailto:ekate.pavlovich@gmail.com" aria-label="email">
              <Envelope />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="tel:+375293207933" aria-label="phone">
              <Phone />
            </a>
          </li>
        </ul>
      </nav>
      <h2 className={styles.advert}>{t("LetsWork")}</h2>
    </section>
  )
}

export default withLayout(Contact)
