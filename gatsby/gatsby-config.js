module.exports = {
  siteMetadata: {
    title: 'Insomnia',
    shortName: 'Insomnia',
    name: 'Insomnia REST Client',
    author: 'Gregory Schier',
    copyright: 'Floating Keyboard Software, Victoria BC, Canada',
    copyrightURL: 'https://floatingkeyboard.com'
  },
  plugins: [
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        theme: {
          // Override Less variables here
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
