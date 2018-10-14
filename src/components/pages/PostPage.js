import React from 'react';

import PostTemplate from '../templates/Post';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { title } = data.site.siteMetadata;
    return <PostTemplate siteTitle={title} post={post} />;
}
