require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Priyanka Yadav`,
    siteTitle: `Priyanka Yadav`,
  },
  plugins: [
    {


      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/Priyanka__488`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/priyanka488/`,
          },
          {
            name: `Github`,
            url: `https://github.com/Priyanka488`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
     resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Priyanka's Blog`,
        short_name: `Priyanka's Blog`,
        description: `Priyanka Yadav's blog`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `./static/favicon-16x16.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
