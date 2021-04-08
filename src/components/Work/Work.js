import React from 'react';

import styles from './Work.module.scss';

// For Circle jQuery plugin
import './circle.css';
import { initCircle, handleClick } from './circle.js';

class Work extends React.Component {

  componentDidMount() {
    initCircle();
    window.addEventListener('resize', initCircle);
  }

  render() {
    return (
      <div className={styles.work} id="work">
        <h1> Work </h1>
        <div className={styles.content}>
          <div className="holderCircle">
            <div className="dotCircle">
              <span className="itemDot active itemDot1" data-tab="1" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot2" data-tab="2" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot3" data-tab="3" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot4" data-tab="4" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
              <span className="itemDot itemDot5" data-tab="5" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
            </div>

            <div className="contentCircle">

              <div className="CirItem active CirItem5">
                google
                <br />
                software engineer
              </div>
              <div className="CirItem CirItem4">
                acm ucsd
                <br/>
                founder & president
              </div>
              <div className="CirItem CirItem3">
                ieee ucsd 
                <br />
                vice president
              </div>
              <div className="CirItem CirItem2">
                teals
                <br />
                computer science ta
              </div>
              <div className="CirItem CirItem1">
                ucsd
                <br />
                computer engineering bs
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className="text active text5">
            i am an incoming software engineer on the google cloud team. previously, i did two swe internships at google. at the first internship, i created the video player for google's machine learning crash course, which has been used by over 15 million people. i also worked on a prototype for a new feature for mit scratch. i also previously worked on google's vision ai team, where i helped to launch a new feature - visual inspection for the manufacturing industry.
            </div>
            <div className="text text4">
            i founded uc san diego's largest technology organization. i recruited 30 board members and established 5 teams which oversaw the organization's logistics for 120+ events, marketing campaigns to 40,000+ students, and expansion to 1500+ registered members. i also led front end development for the organization's initial membership portal iteration, which has, to date, attracted over 100,000 page visits. within a single year of my leadership, the non-profit saw 25,000% growth in membership, launched and acquired 4 child organizations, and received the campus's award for new student organization of the year.
            </div>
            <div className="text text3">
            i was an executive board member for the second largest ieee branch in the nation, and at the time, california's largest engineering organization. i regularly traveled to ieee conferences around the nation to foster and maintain relations with over 30 branches across the country. i also oversaw a team of 6 officers who hosted over 40 technical workshops, professional development talks, and community stem fairs. on the side, i hosted 10 workshops to over 500 college students, on topics such as arduino, python, and web development.
            </div>
            <div className="text text2">
              i briefly taught ap computer science at chula vista high school.
              there, i mentored 30+ high school students on java in order to
              prepare them for their test. also pretty proud of myself because
              i taught a pretty cool lesson on for loops where i had the teacher
              run into a wall.
            </div>
            <div className="text text1">
              i am currently a student at uc san diego, expected to graduate in
              2021. i am currently majoring in computer engineering, having
              taken classes on topics like software engineering, data
              structures, and algorithms. i&#39;m also currently minoring in
              design because i believe that engineers should not only be
              concerned about how their applications work, but how users work
              with their applications as well.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
