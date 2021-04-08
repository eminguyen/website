import React from 'react';
import styles from './ProjectCard.module.scss';
import './static-styles.css';

const Projects = ({link, img, title, subtitle}) => (
  <a href={link}>
    <div className={styles.projectcard}>
      <img src={img} alt="cover" width="350px" height="300px" />
      <p className={styles.title}><strong>{title}</strong></p>
      <p>{subtitle}</p>
    </div>
  </a>
)

export default Projects;
