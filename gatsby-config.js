module.exports = {
  siteMetadata: {
    title: `Emily Nguyen`,
    description: `A front end software engineer`,
    author: `@eminguyen`,
    fullName: `Emily Nguyen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // markdown to pages for blog
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    // loading static data through GraphQL query
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // favicon generator
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `favicon`,
        short_name: `favicon`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // google-analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
