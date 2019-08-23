import React from "react"
import toggleOpen from "../../decorators/toggleOpen"
import { useTranslation } from "react-i18next"
import styles from "./Project.module.scss"

const Project = ({
  href,
  src,
  width,
  height,
  name,
  isOpen,
  toggleOpen,
  technologies
}) => {
  const { t } = useTranslation()
  const text = isOpen ? t("HideSkills") : t("WhatGave")

  const getSkills = () => {
    const technologiesList = technologies.map(i => (
      <li className={styles.skillItem} key={i}>
        {i}
      </li>
    ))

    return technologiesList
  }

  return (
    <div className={styles.container}>
      <a className={styles.title} href={href} target="blank">
        <h3 className={styles.itemTitle}>{name}</h3>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={src}
            alt={name}
            width={width}
            height={height}
          />
        </div>
      </a>
      {/* <div className={styles.skillsWrapper}> */}
      {isOpen && <ul className={styles.skillList}>{getSkills()}</ul>}
      {/* </div> */}
      <button onClick={toggleOpen} className={styles.projectButton}>
        {text}
      </button>
    </div>
  )
}

export default toggleOpen(Project)
