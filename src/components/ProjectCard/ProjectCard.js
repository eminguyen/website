import React from 'react';
import styles from './ProjectCard.module.scss';
import './static-styles.css';

const Projects = ({link, github, img, children}) => (
  <div className={styles.projectcard}>
    <div className={styles.background} id={img}></div>
    <div className={styles.links}>
      <a className={styles.link} href={link} />
      <a className={styles.github} href={github} />
    </div>
    <div className={styles.text}>
      {children}
    </div>
  </div>
)

export default Projects;
