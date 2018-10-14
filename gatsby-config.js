module.exports = {
    siteMetadata: {
        title: 'gatsby-atomic-design-starter',
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                  {
                    resolve: `gatsby-remark-prismjs`,
                  }
                ],
            }
        },
        'gatsby-plugin-styled-components',
    ],
}
