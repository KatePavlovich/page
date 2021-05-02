import React from "react";
import { Project } from "../Project";
import projects from "../../data/projectsBase";
import withLayout from "../Layout";
import styles from "./Projects.module.scss";

const ProjectsComponent = () => {
  const projectsList = projects.map(
    ({ id, link, src, width, height, name, technologies, description }) => (
      <Project
        href={link}
        src={src}
        width={width}
        height={height}
        name={name}
        technologies={technologies}
        description={description}
        key={id}
      />
    )
  );
  return <section className={styles.content}>{projectsList}</section>;
};

export const Projects = withLayout(ProjectsComponent);
