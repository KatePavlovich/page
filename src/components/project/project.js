import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Project.module.scss"
import Fade from "react-reveal/Fade"

const Project = ({
  href,
  src,
  width,
  height,
  name,
  technologies,
  description
}) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(true)

  const text = isOpen ? t("HideSkills") : t("WhatGave")

  const toggleOpen = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

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
        <p className={styles.description}>{t(`${description}`)}</p>
      </a>
      {isOpen && (
        <Fade>
          <ul className={styles.skillList}>{getSkills()}</ul>
        </Fade>
      )}
      <button onClick={toggleOpen} className={styles.projectButton}>
        {text}
      </button>
    </div>
  )
}

export default Project
