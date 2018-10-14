import React from "react"
import { graphql } from "gatsby"

import PostPage from '../components/pages/PostPage';

export default ({ data }) => {
  return <PostPage data={data} />;
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`