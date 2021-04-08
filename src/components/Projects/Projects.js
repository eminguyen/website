import React from 'react';
import styles from './Projects.module.scss';
import ProjectCard from '../ProjectCard';

import ceresimg from '../../images/projects/ceres.jpeg';
import checkupimg from '../../images/projects/checkup.jpeg';
import coronallyimg from '../../images/projects/coronally.jpeg';
import firstcallimg from '../../images/projects/firstcall.jpeg';
import givvyimg from '../../images/projects/givvy.jpeg';
import handoffimg from '../../images/projects/handoff.jpeg';
import learnlyimg from '../../images/projects/learnly.jpeg';
import markimg from '../../images/projects/mark.jpeg';
import massitimg from '../../images/projects/massit.jpeg';
import placeitimg from '../../images/projects/placeit.jpeg';
import portalimg from '../../images/projects/portal.jpeg';
import videoimg from '../../images/projects/videoplayer.jpeg';

const Projects = () => (
  <div className={styles.projects} id="projects">
    <h1> Projects </h1>
    <h3>19 prizes at 22 hackathons!</h3>
    <div className={styles.container}>
      <ProjectCard
        link="https://developers.google.com/machine-learning/crash-course"
        img={videoimg}
        title="interactive video player"
        subtitle="📈 15 million uses">
      </ProjectCard>
      <ProjectCard
        link="https://members.acmucsd.com/"
        img={portalimg}
        title="event tracking membership portal"
        subtitle="📈 100,000+ page visits">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/diagly"
        img={checkupimg}
        title="ai symptom checker"
        subtitle="🏆first place at sf hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/givvy"
        img={givvyimg}
        title="ml donation manager"
        subtitle="🏆 first place at hackuci">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/firstcall"
        img={firstcallimg}
        title="revolutionary 911 response system"
        subtitle="🏆second place at la hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/citrus-hack"
        img={ceresimg}
        title="data based garden simulator"
        subtitle="🏆second place at citrus hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/place-it-n9tq5b"
        img={placeitimg}
        title="machine learning city planner"
        subtitle="🏆 top five at la hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/hi-u"
        img={handoffimg}
        title="collaborative no-code creator"
        subtitle="🏆 team vertical winner at hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/massit"
        img={massitimg}
        title="community ecommerce platform"
        subtitle="🏆 best business hack at dub hacks">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/coronally"
        img={coronallyimg}
        title="pandemic supply sharer"
        subtitle="🏆 best use of api at hacktech">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/learn-ly-7yjq54"
        img={learnlyimg}
        title="podcasts with live translation"
        subtitle="🏆 best use of api at hacksc">
      </ProjectCard>
      <ProjectCard
        link="https://devpost.com/software/mark"
        img={markimg}
        title="augmented reality graffiti"
        subtitle="🏆 best devpost at hackuci">
      </ProjectCard>
    </div>
  </div>
)

export default Projects;
