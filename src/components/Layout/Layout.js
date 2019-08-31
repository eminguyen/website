import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Layout.module.scss'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, showHome = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            fullName
          }
        }
      }
    `}
    render={data => (
      <div className={styles.pageWrapper}>
        <Header/>
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
