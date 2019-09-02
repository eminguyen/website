import React from 'react';
import Layout from '@components/Layout';
import About from '@components/About';
import Splash from '@components/Splash';
import Work from '@components/Work';

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
  </Layout>
)

export default IndexPage
