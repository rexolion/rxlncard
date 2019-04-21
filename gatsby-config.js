module.exports = {
  pathPrefix: '/rxlncard',
  siteMetadata: {
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
    `gatsby-plugin-offline`,
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
      `gatsby-transformer-json`,
      {
      	resolve: 'gatsby-source-filesystem',
      	options: {
      		name: 'data',
      		path: `${__dirname}/src/data`
      	}
      },
    
  ],
}
