import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: '/Increasio-gatsby',

  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint:
          'https://api-ca-central-1.graphcms.com/v2/cl2kmw2o40ni501z46usg4te0/master'
      }
    },
    'gatsby-plugin-image',
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-layout'
  ]
};

export default config;
