import PropTypes from 'prop-types';
import React from 'react';
import styles from './About.module.scss';
import { StaticQuery, graphql } from 'gatsby';

const returnFalse = (e) => {
  e.preventDefault();
  return false;
}

const About = ( { id }) => (
  <div className={styles.about} id="about">
    <div className={styles.whitebar}/>
    <h1>hi i&#39;m emily!</h1>
    <div className={styles.content}>
      <div className={styles.image}></div>
      <div className={styles.text}>
        <p>but you can call me emi. when I was younger, i was
        called antony but things change. what hasn't changed is my love for
        computers. my immigrant parents sacrificed most of their savings so that i could have
        a computer at age 3. now, i'm a software engineer who wants to pay it forward by
        providing others with opportunities to code.
        in my free time i run marathons, climb league solo queue, and drink loads of boba.
        </p>
        <br />
        <form>
          <a href="mailto:emily@computer.org">
            Email
            <div className={styles.layer}>emily@computer.org</div>
          </a>
          <a href="/static/Emily_Nguyen_Resume.pdf">
            Resume
            <div className={styles.layer}>It&#39;s a PDF!</div>
          </a>
        </form>
      </div>
    </div>
  </div>
)

About.propTypes = {
  id: PropTypes.string
}

export default About;
