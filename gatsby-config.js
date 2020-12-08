module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=robot
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DIVISION.',
        short_name: 'DIVISION.',
        start_url: '/',
        background_color: '#070707',
        theme_color: '#ff4e15',
        display: 'standalone',
        icon: 'src/assets/images/Bg_1.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
