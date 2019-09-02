import PropTypes from 'prop-types'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = ({ siteMetadata }) => (
  <footer className={styles.footer}>
    <div id="experience">
      <span>Made with Yerba and Love by </span>
      {siteMetadata.fullName}.
      <div> Source code here. </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteMetadata: PropTypes.object,
}

export default Footer
