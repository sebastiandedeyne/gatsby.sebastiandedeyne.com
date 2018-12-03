import React from "react";
import Post from "../components/Post";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default function Index({ data }) {
  const posts = data.posts.edges;

  return (
    <Layout>
      {posts.map(({ node }) => (
        <Post key={node.fields.slug} {...node.fields}>
          <section
            className="markup"
            dangerouslySetInnerHTML={{
              __html: node.fields.summary
            }}
          />
          {node.fields.summary && (
            <p className="markup">
              <Link to={node.fields.slug}>Read more</Link>
            </p>
          )}
        </Post>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`;
