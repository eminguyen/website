import PropTypes from 'prop-types'
import React from 'react'
import styles from './About.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const About = ({ about }) => (
  <div id="about">
    <h1>about</h1>
    <p>{about}</p>
  </div>
)

About.propTypes = {
  about: PropTypes.string,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                staticData {
                  about
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <About
        about={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.staticData
            .about
        }
      />
    )}
  />
)
