import React from "react"
import withLayout from "../Layout"
import styles from "./Home.module.scss"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.parallax} />

        <section className={styles.introSection}>
          <h1>{t("Welcome")}</h1>
          <div className={styles.contactsWrapper}>
            <img
              className={styles.bioPhoto}
              src="https://github.com/KatePavlovich/rsschool-codejam1-cv/blob/gh-pages/img/bioPhoto.jpg?raw=true"
              alt="me"
              width="144"
              height="144"
            />
            <p>
              {t("Tel")}
              <a
                className={styles.contactsWrapperLink}
                href="tel:+375293207933"
              >
                +37529 320 79 33
              </a>
            </p>
            <p>
              {t("Email")}
              <a
                className={styles.contactsWrapperLink}
                href="mailto:ekate.pavlovich@gmail.com"
              >
                ekate.pavlovich@gmail.com
              </a>
            </p>
          </div>
        </section>
        <section className={styles.content}>
          <article className={styles.descriptionIndent}>
            {t("Content")
              .split("%")
              .map((item, key) => {
                return (
                  <p key={key}>
                    {item}
                    <br />
                  </p>
                )
              })}
          </article>
        </section>
        <section className={styles.info}>
          <div className={styles.descriptionColumns}>
            <p className={styles.descriptionPointsStyle}>{t("Education")}: </p>
            <ul>
              <li className={styles.listItem}>{t("Educ1")}</li>
              <li className={styles.listItem}>{t("Educ2")}</li>
              <li className={styles.listItem}>
                The Rolling Scopes School, 2017-2018
              </li>
            </ul>
          </div>
          <div className={styles.descriptionColumns}>
            <p className={styles.descriptionPointsStyle}>
              {t("Certificates")}:
            </p>
            <ul>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.freecodecamp.org/certification/kate/front-end-libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front End Libraries
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.freecodecamp.org/certification/kate/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript Algorithms and Data Structures
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.sololearn.com/Certificate/1024-9303082/pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript Tutorial course
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.sololearn.com/Certificate/1059-9303082/pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PHP Tutorial course
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.sololearn.com/Certificate/1082-9303082/pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jQuery Tutorial course
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="https://www.freecodecamp.org/certification/kate/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Responsive Web Design
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  className={styles.contactsWrapperLink}
                  href="http://learn.javascript.ru/courses/react-20180510/kate21/certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React.JS
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.descriptionColumns}>
            <p className={styles.descriptionPointsStyle}>{t("Skills")}: </p>
            <p>
              JavaScript, HTML5, CSS3, Jquery, Sass, Bootstrap, Ajax, OOP, ES6,
              Git, React, Redux
            </p>
          </div>
          <div className={styles.descriptionColumns}>
            <p className={styles.descriptionPointsStyle}>
              {t("English level")}:{" "}
            </p>
            <div>
              <p>B1</p>
              <a
                className={styles.contactsWrapperLink}
                href="https://www.efset.org/cert/WhpTPx"
                target="_blank"
                rel="noopener noreferrer"
              >
                EF SET Certificate
              </a>
            </div>
          </div>
          <a
            className={styles.downloadButton}
            href="file/Profile.pdf"
            target="_blank"
            download
          >
            {t("Download")}
          </a>
        </section>
      </section>
    </div>
  )
}

export default withLayout(Home)
