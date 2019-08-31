import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'

const Header = ({ showHome }) => (
  <header className={styles.header}>
    <img src= "../images/logo.svg"/>
    <div className={styles.menu}>
      <div className={styles.menuItem}>
        <Link to="/#about">about</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/#experience">experience</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/#about">projects</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/#about">list</Link>
      </div>
      <div className={styles.menuItem}>
        <Link to="/#about">contact</Link>
      </div>
    </div>
    <hr/>
  </header>
)

Header.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Header
