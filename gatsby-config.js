module.exports = {
  siteMetadata: {
    title: "Sebastian De Deyne",
    author: "Sebastian De Deyne",
    description: "Web designer & developer",
    siteUrl: "https://sebastiandedeyne.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-smartypants"]
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50412981-1",
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.fields.title,
                  description: edge.node.html,
                  date: new Date(),
                  url: `https://sebastiandedeyne.com${edge.node.fields.slug}`,
                  guid: `https://sebastiandedeyne.com${edge.node.fields.slug}`
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 20,
                  sort: { fields: [fileAbsolutePath], order: DESC },
                ) {
                  edges {
                    node {
                      html
                      fields {
                        title
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Sebastian De Deyne"
          }
        ]
      }
    }
  ]
};
