import React from "react"
import toggleOpen from "../../decorators/toggleOpen"
import { CSSTransitionGroup } from "react-transition-group"
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
  const text = isOpen ? "hide skills" : "What it gave me"

  const getSkills = () => {
    const technologiesList = technologies.map((i, index) => (
      <li key={index}>{i}</li>
    ))

    return isOpen && <ul>{technologiesList}</ul>
  }

  return (
    <div className={styles.container}>
      <a className={styles.title} href={href} target="blank">
        <img
          className={styles.img}
          src={src}
          alt={name}
          width={width}
          height={height}
        />
        <h3 className="itemTitle">{name}</h3>
      </a>
      <button onClick={toggleOpen} className={styles.projectButton}>
        {text}
      </button>
      <CSSTransitionGroup
        transitionName="toggleAnimation"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        className={styles.toggleAnimationContainer}
      >
        {getSkills()}
      </CSSTransitionGroup>
    </div>
  )
}

export default toggleOpen(Project)
