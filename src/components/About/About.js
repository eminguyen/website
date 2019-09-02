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
    <h1>Hi I&#39;m Emily!</h1>
    <div className={styles.content}>
      <div className={styles.image}></div>
      <div className={styles.text}>
        <p>But you can call me Emi. When I was younger, I was
        called Antony but things change. What hasn’t changed is my love for
        computers. My parents sacrificed most of their savings so that I could have
        a PC at age 3.   Now, I’m a software engineer who wants to pay it forward by
        providing others with opportunities to code.
        I aim to combine my love of the web with my eye for  design in order to
        create beautiful applications and helpful tools. Aside from that, I also
        spend my time teaching Java at local high schools, facilitating engineering summer camps,
        organizing STEM fairs, and hosting web development workshops. In my spare time, I like to climb
        League duo queue with my cousin and down gallons of boba with my best friends.
        I also often drive hundreds of miles to spend time with my siblings
        and I run thousands more to explore new places. To compensate for
        the damage to my feet, you&#39;ll often find me
        flexing on other people with my Crocs and Heelys.
        <br/>  <br/>
        I’m always seeking new opportunities. If you&#39;d like to work together, I
        accept payment in the forms of money and Korean BBQ.</p>
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
