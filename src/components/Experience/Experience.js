import PropTypes from 'prop-types';
import React from 'react';
import styles from './Experience.module.scss';
import { StaticQuery, graphql } from 'gatsby';

const Experience = ({ }) => (
  <div id="experience">
  </div>
)

Experience.propTypes = {
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
      <Experience
      />
    )}
  />
)
