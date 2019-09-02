import React from 'react';
import styles from './Projects.module.scss';
import ProjectCard from '../ProjectCard';

const Projects = () => (
  <div className={styles.projects} id="projects">
    <h1> Projects </h1>
    <div className={styles.container}>
      <ProjectCard
        github=""
        link=""
        img="comingsoon">
        <h3>ACM Members </h3>
        <h5>Membership portal for ACM UCSD</h5>
        <h5>React Redux Axios</h5>
      </ProjectCard>
      <ProjectCard
        github=""
        link="https://github.com/eminguyen/acmurl"
        img="acmurl">
        <h3>ACM URL </h3>
        <h5>URL Shortener for ACM UCSD</h5>
        <h5>MongoDB Express React Redux Node.js</h5>
      </ProjectCard>
      <ProjectCard
        github="https://github.com/eminguyen/roadblock"
        link="https://la-hacks-2019.herokuapp.com/"
        img="roadblock">
        <h3>roadblock </h3>
        <h5>Safety first mapping platform for LA Hacks</h5>
        <h5>Node.js Express Firebase</h5>
      </ProjectCard>
    </div>
  </div>
)

export default Projects;
