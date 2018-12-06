import React from "react";
import { Link } from "gatsby";
import Post from "../components/Post";
import Layout from "../components/Layout";

export default function PostTemplate({ data }) {
  return (
    <Layout title={data.post.fields.title} wrap>
      <Post style={{ paddingBottom: "3rem" }} {...data.post.fields}>
        <section
          className="markup"
          dangerouslySetInnerHTML={{ __html: data.post.html }}
        />
      </Post>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      ...Post
    }
  }
`;
