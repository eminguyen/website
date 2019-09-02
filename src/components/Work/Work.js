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
              <span className="itemDot itemDot6" data-tab="6" onClick={handleClick}>
                <span className="forActive"></span>
              </span>
            </div>

            <div className="contentCircle">

              <div className="CirItem active CirItem6">
                Google
                <br />
                Software Engineering Intern
              </div>
              <div className="CirItem CirItem5">
                Kitu Systems
                <br />
                Software Engineering Intern
              </div>
              <div className="CirItem CirItem4">
                ACM UC San Diego
                <br/>
                Founding President
              </div>
              <div className="CirItem CirItem3">
                IEEE UC San Diego
                <br />
                Vice Chair External
              </div>
              <div className="CirItem CirItem2">
                TEALS
                <br />
                AP Computer Science TA
              </div>
              <div className="CirItem CirItem1">
                UC San Diego
                <br />
                Computer Engineering B.S.
                <br />
                Design Minor
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className="text active text6">
              As an intern on Google&#39;s Education team, I built two projects.
              First, I added four features to a video player utilized by
              100,000+ people. This video player is currently available on
              Google&#39;s Machine Learning Crash Course. Secondly, I developed
              and designed an early prototype of a Javascript event player for
              the Scratch block programming language. I also wrote unit test and
              maintained design documentation for code upkeep.
            </div>
            <div className="text text5">
              I spent six months working on Kitu System&#39;s Cloud servers.
              There, I refactored much of their Node.js code and developed a
              module housing most of the company&#39;s shared code between
              teams. I also wrote unit and integration tests with mocks, spies,
              and stubs through a combination of Javascript testing tools
              including Mocha, Sinon, and Chai. This was also my first exposure
              to Agile. We had daily Scrum meetings and utilized Atlassian Jira
              / Bitbucket with Git as task management and version control tools.
            </div>
            <div className="text text4">
              I founded a Chapter of the Association for Computing Machinery,
              the world&#39;s largest computing society, at UC San Diego. In six
              months prior to launch, I put together a team of 19 Board members
              and recruited over 100+ members. We&#39;re aiming to launch this
              upcoming Fall with 40+ events for an estimated 400+ members.
              As ACM President, I&#39;ve also been a strong proponent for
              collaboration, initiating meetings with many other student
              organizations and ACM Chapters.
            </div>
            <div className="text text3">
              I was an executive Board member for UC San Diego&#39;s largest
              engineering organization and IEEE&#39;s third largest branch, with
              600+ members. Over the course of a year, I oversaw a team of 6
              that hosted 40+ events which impacted 1000+ people. These events
              included community socials, outreach STEM fairs, coding workshops,
              and professional growth talks. Prior to my position as IEEE
              VCE, I was also its Technical Chair and a Staff Member. In those
              roles, I taught college students engineering topics like Python
              and Arduino and I taught younger students topics like HTML and
              CSS.
            </div>
            <div className="text text2">
              I briefly taught AP Computer Science A at Chula Vista High School.
              There, I mentored 30+ high school students on Java in order to
              prepare them for their test. Also pretty proud of myself because
              I taught a pretty cool lesson on for loops where I had the teacher
              run into a wall.
            </div>
            <div className="text text1">
              I am currently a student at UC San Diego, expected to graduate in
              2021. I am currently majoring in Computer Engineering, having
              taken classes on topics like Software Engineering, Data
              Structures, and Algorithms. I&#39;m also currently minoring in
              Design because I believe that engineers should not only be
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
