module.exports = {
  siteMetadata: {
    title: `Joan Ribó`,
    description: `A València em sent lliure. És una ciutat on sóc feliç. Jo, amb Ribó.`,
    keywords: [`joan ribo`, `compromís`, `valència`, `eleccions municipals`, `ajuntament`, `ayuntamiento`, `alcalde`],
    author: `@joanribo`,
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
        name: `Joan Ribó 2019`,
        short_name: `Joan Ribó`,
        start_url: `/`,
        background_color: `#DB742E`,
        theme_color: `#DB742E`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-192x192.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          }
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
