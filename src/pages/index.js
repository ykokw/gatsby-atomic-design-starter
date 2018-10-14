import React from 'react';
import { graphql } from 'gatsby';

import IndexPage from '../components/pages/IndexPage';

export default ({ data }) => <IndexPage data={data} />;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`