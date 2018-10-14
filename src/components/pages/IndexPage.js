import React from 'react';

import IndexTemplate from '../templates/Index';

export default ({ data }) => {
    const siteTitle = data.site.siteMetadata.title || '';
    const posts = (data.allMarkdownRemark.edges || []).map(({ node: { frontmatter: { title, date, tags}, fields: { slug }}}) => ({ 
        path: slug || '/',
        title,
        date,
        tags,
    }));
    return <IndexTemplate siteTitle={siteTitle} posts={posts}/>;
}
