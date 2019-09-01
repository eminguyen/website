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

const Layout = ({ listItems, children }) => (
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
        <Header listItems={listItems}/>
        <div className={styles.contentContainer}>{children}</div>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  listItems: PropTypes.array.isRequired
}

export default Layout
