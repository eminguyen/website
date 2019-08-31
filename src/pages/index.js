import React from 'react'
import Layout from '@components/Layout'
import About from '@components/About';
import Experience from '@components/Experience';

const IndexPage = ({ data }) => (
  <Layout>
    <About/>
    <Experience/>
  </Layout>
)

export default IndexPage
