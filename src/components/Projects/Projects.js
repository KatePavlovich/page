import React from "react"
import Project from "../Project"
import projects from "../../projectsBase"
import withLayout from "../Layout"
import styles from "./Projects.module.scss"

const Projects = () => {
  const projectsList = projects.map(
    ({ id, link, src, width, height, name, technologies }) => (
      <Project
        href={link}
        src={src}
        width={width}
        height={height}
        name={name}
        technologies={technologies}
        key={id}
      />
    )
  )
  return <section className={styles.content}>{projectsList}</section>
}

export default withLayout(Projects)
