import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ua0pwfin',
        dataset: 'production',
      }
    },
    'gatsby-plugin-image',
  ],
}

export default config
