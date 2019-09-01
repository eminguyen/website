import PropTypes from 'prop-types'
import React from 'react'
import styles from './About.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const About = ( { id }) => (
  <div className={styles.about} id="about">
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>about</h1>
        <h3> Hi I&#39;m Emily! </h3>
        <p>But you can call me Emi. When I was younger, I was
        called Antony but things change. What hasn’t changed is my love for
        computers. My parents sacrificed most of their savings so that I could have
        a PC at age 3.   Now, I’m a software engineer who wants to pay it forward by
        providing others with opportunities to code.
        I aim to combine my love of the web with my eye for  design in order to
        create beautiful applications and helpful tools. When I’m not coding,
        I’m teaching Java at local high schools, facilitating engineering summer camps,
        and hosting web development workshops.
        <br/>  <br/>
        I’m always seeking new opportunities. Feel free to contact me at
        emily@computer.org if you’d like to work with me! My resume is linked here if you&#39;d like to take a look at it. In addition to money for
        my tuition, I’m also open to payment in the form of boba and Korean BBQ.</p>
      </div>
      <div className={styles.image}>
      </div>
    </div>
  </div>
)

About.propTypes = {
  id: PropTypes.string
}

export default About;
