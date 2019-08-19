import React from "react"
import Project from "../Project"
import projects from "../../projectsBase"
import withLayout from "../Layout"
import styles from "./Projects.module.scss"

const Projects = () => {
  const projectsList = projects.map(
    ({ id, link, src, width, height, name, technologies }) => (
      <li key={id} className="project-tile">
        <Project
          href={link}
          src={src}
          width={width}
          height={height}
          name={name}
          technologies={technologies}
        />
      </li>
    )
  )
  return (
    <div>
      <section className="content" id="projects">
        <ul className={styles.projectsList}>{projectsList}</ul>
      </section>
    </div>
  )
}

export default withLayout(Projects)
