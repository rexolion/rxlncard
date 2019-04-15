module.exports = {
  siteMetadata: {
    pathPrefix: '/rxlncard',
    title: `Alekseev Artyom | Frontend developer`,
    description: `Alekseev Artyom - frontend developer and designer`,
    author: `@rexolion`,
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
    `gatsby-plugin-offline'`,
    `gatsby-plugin-typescript`,
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alekseev Artyom | Frontend developer`,
        short_name: `Alekseev Artyom | Frontend developer`,
        start_url: `/rxlncard/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
