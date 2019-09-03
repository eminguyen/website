import React from 'react';
import About from '@components/About';
import Contact from '@components/Contact';
import Layout from '@components/Layout';
import List from '@components/List';
import Projects from '@components/Projects';
import Splash from '@components/Splash';
import Work from '@components/Work';

import '@styles/base.scss';

const listItems = [
  { link: '#about', name: 'about' },
  { link: '#work', name: 'work' },
  { link: '#projects', name: 'projects' },
  { link: '#list', name: 'list' },
  { link: '#contact', name: 'contact' },
]

const IndexPage = ({ data }) => (
  <Layout listItems={listItems}>
    <Splash />
    <About />
    <Work />
    <Projects />
    <List />
    <Contact />
  </Layout>
)

export default IndexPage
