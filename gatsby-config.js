module.exports = {
  siteMetadata: {
    title: `Face-Recognition`,
    description: `This Magic Brain will detect faces in your pictures`,
    author: 'Savin Raul Calin'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Face-Recognition`,
        short_name: `FR`,
        start_url: `/`,
        background_color: `#a5373c`,
        theme_color: `#550005`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
