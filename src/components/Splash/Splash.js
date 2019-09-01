import React from 'react';

import SplashBackground from '../SplashBackground';
import styles from './Splash.module.scss';
import Typed from '../Typed';

export default () => (
  <div className={styles.splash}>
    <SplashBackground />
    <Typed className={styles.typed} />
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="120" strokeLinecap="round"/>
    </svg>
  </div>
)
