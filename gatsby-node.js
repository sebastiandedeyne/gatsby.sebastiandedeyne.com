const path = require("path");
const remark = require("remark");
const { graphql } = require("gatsby");
const remarkHTML = require("remark-html");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/post.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fileAbsolutePath], order: DESC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach((post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `/${path.substr(18)}`
    });

    createNodeField({
      name: "date",
      node,
      value: new Date(path.substr(7, 10))
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title
    });

    const subtitle = markdown(node.frontmatter.subtitle);

    createNodeField({
      name: "subtitle",
      node,
      value: subtitle.substr(3, subtitle.length - 7)
    });

    createNodeField({
      name: "externalLink",
      node,
      value: node.frontmatter.link
    });

    const isSummarized = !!node.frontmatter.summary;

    createNodeField({
      name: "isSummarized",
      node,
      value: isSummarized
    });

    createNodeField({
      name: "summary",
      node,
      value: markdown(
        isSummarized ? node.frontmatter.summary : node.rawMarkdownBody
      )
    });

    createNodeField({
      name: "tags",
      node,
      value: node.frontmatter.tags || []
    });
  }
};

function markdown(string) {
  return remark()
    .use(remarkHTML)
    .processSync(string)
    .toString()
    .trim();
}
