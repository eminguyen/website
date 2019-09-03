import React from 'react';
import styles from './List.module.scss';
import {initList} from './listscript';

class List extends React.Component {

  componentDidMount() {
    initList();
  }

  render() {
    return (
      <div className={styles.list} id="list">
        <h1>List</h1>
        <p className={styles.description}>
          I believe that it&#39;s important to not only challenge myself in
          my work, but in all aspects of my life.
          <br/>
          I came up with 100 items as a list of goals and
          experiences I want to have before I die.
          <br />
          Every item on this list is helps my soul find a bit more growth and
          makes my life be a bit more unforgettable.
        </p>
        <div className={styles.selectedItem}>
          <div className={styles.selectedItemCenter}>
            <img className={styles.selectedImage} id="listImage" src="http://placekitten.com/200/300"/>
            <p id="listContent">
             If you&#39;re seeing this there&#39;s a glitch in the matrix.
            </p>
          </div>
        </div>
        <div className={styles.ball + ' ' + styles.before}></div>
        <div className={styles.ball + ' ' + styles.after}></div>
        <div className={styles.listContent}>
          <div className={styles.container}>
            <div className={styles.items}>
              <div>Run a hundred mile ultramarathon</div>
              <div className="item">
                <div className={styles.complete + ' complete'} id="skydiving" data-content="/static/list/skydiving.png">Go skydiving</div>
                <div className={styles.content + ' skydiving'}>
                  <b> Skydiving </b> | 08.24.19 <br />
                  I&#39;ve always been afraid of heights. Growing up, I
                  couldn&#39;t even climb on my dad&#39;s shoulders. And so,
                  when my friend asked me if I would be willing to go
                  skydiving with her, I didn&#39;t hesitate to say yes.
                  I knew I had to conquer my fear and indeed I did. While the
                  first few seconds of the dive were the scariest moments of my
                  life, skydiving taught me that the best rewards lie on the
                  other side of fear.
                </div>
              </div>
              <div>Climb a mountain</div>
              <div>Get a tattoo</div>
              <div>Participate in a protest</div>
              <div>Isolate myself from tech for a week</div>
              <div>Run naked through a nude beach</div>
              <div>Compete in a triathlon</div>
              <div>Run a Ragnar race</div>
              <div>Fly a plane</div>
              <div>Get SRS, BA,  and FFS.</div>
              <div>Watch a meteor shower in the desert</div>
              <div>Be an extra in a blockbuster film</div>
              <div>Be responsible for killing my own food</div>
              <div>Hit Diamond in League of Legends</div>
              <div>Go to Disneyland alone</div>
              <div>Cosplay at Comic Con</div>
              <div>Learn to Slackline at Muscle Beach</div>
              <div>Go on a Los Angeles ridealong</div>
              <div>Celebrate Pride in San Francisco</div>
              <div>Road trip down Route 66</div>
              <div>Play the tables in Vegas</div>
              <div>Attend Burning Man</div>
              <div>Celebrate New Years at Time Square</div>
              <div>Watch a musical on Broadway</div>
              <div>Swim with dolphins in Hawaii</div>
              <div>Dogsled through Alaska</div>
              <div>Attend the Olympics</div>
              <div>Hike the Pacific Crest Trail</div>
              <div>See the Northern Lights</div>
              <div>Devour a portion of poutine in Montreal</div>
              <div>Celebrate La Dia De Los Muertos</div>
              <div>Go flyboarding in Cancun</div>
              <div>Zipline in Puerto Rico</div>
              <div>Volcano board in Nicaragua</div>
              <div>Hike the Inca Trail to Machu Picchu</div>
              <div>Gaze upon Christ the Redeemer</div>
              <div>Catch my reflection at Salar de Uyuni</div>
              <div>Smoke a cigar in Cuba</div>
              <div>See the changing of the guard in London</div>
              <div>Attend mass at the Vatican</div>
              <div>Drink beer at Oktoberfest</div>
              <div>Visit the Acropolis in Greece</div>
              <div>Ride a gondola through Venice</div>
              <div>Sleep in an Ice Hotel in Sweden</div>
              <div>Have a staring contest with Mona Lisa</div>
              <div>Fly a hot air balloon in Cappadocia</div>
              <div>Run with the bulls in Spain</div>
              <div>Celebrate Holi in India</div>
              <div>Float in the Dead Sea</div>
              <div>Walk the Great Wall of China</div>
              <div>Visit my mother land, Vietnam</div>
              <div>Go to a K-pop concert in Korea</div>
              <div>Eat Kobe beef in Kobe</div>
              <div>Visit the Gardens by the Bay</div>
              <div>Release lanterns in Taiwan</div>
              <div>Scuba dive the Great Barrier Reef</div>
              <div>Reenact a Lord of the Rings scene in Hobbiton</div>
              <div>Catch an opera in Sydney</div>
              <div>Ride a camel to the Great Pyramids</div>
              <div>Sand surf through the Sahara</div>
              <div>Visit penguins in Antarctica</div>
              <div>Gorilla trek in Uganda</div>
              <div>Go on an African Safari</div>
              <div>Eat at the cheapest Michelin Star restaurant</div>
              <div>Crunch on a deep fried tarantula</div>
              <div>Drink some moonshine</div>
              <div>Meet the Father of the Internet</div>
              <div>Solve a Rubik’s Cube, blindfolded</div>
              <div>Learn to play the piano</div>
              <div>Perform card tricks at a child’s birthday party</div>
              <div>Become fluent in sign language</div>
              <div>Stay overnight in a Walmart fort</div>
              <div>Solve a Rubik’s cube, blindfolded</div>
              <div>Lockpick my way into a friend’s house</div>
              <div>Perform a kickflip</div>
              <div>Juggle bowling pins</div>
              <div>Master a martial art</div>
              <div>Split an apple with my bare hands</div>
              <div>Write a children’s book</div>
              <div>Adopt an animal from the shelter</div>
              <div>Help someone else complete a bucket list item</div>
              <div>Leave a $100 tip at a restaurant</div>
              <div>Save a baby sea turtle</div>
              <div>Host a foreign exchange student</div>
              <div>Present a TED Talk</div>
              <div>Donate blood</div>
              <div>Help in a humanitarian aid zone</div>
              <div>Volunteer at an orphanage</div>
              <div>Build a house for the homeless</div>
              <div>Become legally ordained</div>
              <div>Graduate college</div>
              <div>Pay off all debt</div>
              <div>Own a self driving car</div>
              <div>Work at Google</div>
              <div>Attempt a startup</div>
              <div>Start a charity</div>
              <div>Fall in love</div>
              <div>Raise children</div>
              <div>Save a life</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List;
