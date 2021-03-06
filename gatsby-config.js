module.exports = {
  siteMetadata: {
    siteUrl: `https://www.murcul.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-109513799-1"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
