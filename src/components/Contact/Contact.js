import React from 'react';
import styles from './Contact.module.scss';
import { initBalls } from './balls.js';
import {
  BrowserView,
  MobileView,
  isBrowser,
} from "react-device-detect";


class Contact extends React.Component {

  componentDidMount() {
    if(isBrowser) {
      initBalls();
    }
  }

  render() {
    return (
      <div className={styles.contact} id="contact">
        <BrowserView>
          <canvas id="stage"></canvas>
        </BrowserView>
        <MobileView>
          <div className={styles.mcontainer}>
          <a className={styles.mcontact + ' ' + styles.github} href="https://github.com/eminguyen"/>
          <a className={styles.mcontact + ' ' + styles.linkedin} href="https://www.linkedin.com/in/emilyhuongnguyen/"/>
          <a className={styles.mcontact + ' ' + styles.facebook} href="https://www.facebook.com/empressily"/>
          <a className={styles.mcontact + ' ' + styles.instagram} href="https://www.instagram.com/empress.emi"/>
          <a className={styles.mcontact + ' ' + styles.medium} href="https://medium.com/@emilyhuongnguyen"/>
          </div>
        </MobileView>
      </div>
    )
  }
}

export default Contact;
